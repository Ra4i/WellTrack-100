using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WellTrackAPI.Data;
using WellTrackAPI.DTOs.Messages;
using WellTrackAPI.Models;

namespace WellTrackAPI.Controllers
{
    [ApiController]
    [Route("api/messages")]
    public class MessagesController : ControllerBase
    {
        private readonly AppDbContext _db;

        // Constants
        private const int DEFAULT_PAGE_LIMIT = 50;
        private const int MAX_PAGE_LIMIT = 100;
        private const int MAX_CONVERSATIONS_PER_PAGE = 50;

        public MessagesController(AppDbContext db)
        {
            _db = db;
        }

        // ──── Helper: Get bidirectional messages query ────
        private IQueryable<Message> GetBidirectionalConversation(int userId, int otherId) =>
            _db.Messages.Where(m =>
                (m.SenderId == userId && m.ReceiverId == otherId && m.BotResponse == null) ||
                (m.SenderId == otherId && m.ReceiverId == userId && m.BotResponse == null)
            );

        // ──── Get conversation thread with pagination ────
        [HttpGet("thread")]
        public async Task<ActionResult<ConversationResponse>> GetConversationThread(
            [FromQuery] int userId,
            [FromQuery] int friendId,
            [FromQuery] int page = 0,
            [FromQuery] int limit = DEFAULT_PAGE_LIMIT)
        {
            if (userId <= 0 || friendId <= 0)
                return BadRequest(new { error = "Invalid user IDs" });

            if (page < 0 || limit <= 0 || limit > MAX_PAGE_LIMIT)
                return BadRequest(new { error = "Invalid pagination parameters" });

            // Verify friendship exists
            var friendship = await _db.Friends
                .FirstOrDefaultAsync(f => f.UserId == userId && f.FriendUserId == friendId);

            if (friendship == null)
                return Forbid();

            // Get messages and total count in optimized query
            var skip = page * limit;
            var query = GetBidirectionalConversation(userId, friendId)
                .OrderBy(m => m.CreatedAt);

            var totalCount = await query.CountAsync();

            var messages = await query
                .Skip(skip)
                .Take(limit)
                .Include(m => m.Sender)
                .Select(m => new ConversationMessageDto
                {
                    Id = m.Id,
                    SenderId = m.SenderId,
                    ReceiverId = m.ReceiverId!.Value, // Safe: user messages always have ReceiverId
                    SenderName = m.Sender!.Name,
                    Content = m.Content,
                    CreatedAt = m.CreatedAt
                })
                .ToListAsync();

            var response = new ConversationResponse
            {
                Messages = messages,
                Page = page,
                Limit = limit,
                Total = totalCount,
                HasMore = (page + 1) * limit < totalCount
            };

            return Ok(response);
        }

        // ──── Get all conversations with pagination (optimized single query) ────
        [HttpGet("all")]
        public async Task<ActionResult<List<ConversationPreviewDto>>> GetAllConversations(
            [FromQuery] int userId,
            [FromQuery] int page = 0,
            [FromQuery] int limit = MAX_CONVERSATIONS_PER_PAGE)
        {
            if (userId <= 0)
                return BadRequest(new { error = "Invalid userId" });

            if (page < 0 || limit <= 0 || limit > 100)
                return BadRequest(new { error = "Invalid pagination parameters" });

            var skip = page * limit;

            // Optimized single query: Get friends with latest message in one roundtrip
            var conversations = await _db.Friends
                .Where(f => f.UserId == userId)
                .OrderByDescending(f => f.CreatedAt)
                .Skip(skip)
                .Take(limit)
                .Select(friend => new ConversationPreviewDto
                {
                    FriendId = friend.FriendUserId,
                    FriendName = friend.FriendUser!.Name,
                    FriendEmail = friend.FriendUser.Email,
                    LastMessage = _db.Messages
                        .Where(m =>
                            (m.SenderId == userId && m.ReceiverId == friend.FriendUserId && m.BotResponse == null) ||
                            (m.SenderId == friend.FriendUserId && m.ReceiverId == userId && m.BotResponse == null)
                        )
                        .OrderByDescending(m => m.CreatedAt)
                        .Select(m => m.Content)
                        .FirstOrDefault() ?? "(no messages)",
                    LastMessageTime = _db.Messages
                        .Where(m =>
                            (m.SenderId == userId && m.ReceiverId == friend.FriendUserId && m.BotResponse == null) ||
                            (m.SenderId == friend.FriendUserId && m.ReceiverId == userId && m.BotResponse == null)
                        )
                        .OrderByDescending(m => m.CreatedAt)
                        .Select(m => (DateTime?)m.CreatedAt)
                        .FirstOrDefault() ?? DateTime.UtcNow,
                    UnreadCount = 0
                })
                .ToListAsync();

            return Ok(conversations);
        }

        // ──── Send message to friend ────
        [HttpPost("send")]
        public async Task<ActionResult<MessageResponseDto>> SendMessage([FromBody] SendMessageDto dto)
        {
            if (dto.SenderId <= 0 || dto.ReceiverId <= 0 || string.IsNullOrWhiteSpace(dto.Content))
                return BadRequest(new { error = "Invalid message data" });

            // Verify friendship exists
            var friendship = await _db.Friends
                .FirstOrDefaultAsync(f => f.UserId == dto.SenderId && f.FriendUserId == dto.ReceiverId);

            if (friendship == null)
                return Forbid();

            var sender = await _db.Users.FindAsync(dto.SenderId);
            if (sender == null)
                return NotFound(new { error = "Sender not found" });

            var message = new Message
            {
                SenderId = dto.SenderId,
                ReceiverId = dto.ReceiverId,
                Content = dto.Content,
                CreatedAt = DateTime.UtcNow
            };

            _db.Messages.Add(message);
            await _db.SaveChangesAsync();

            var response = new MessageResponseDto
            {
                Id = message.Id,
                SenderId = message.SenderId,
                ReceiverId = message.ReceiverId!.Value,
                SenderName = sender.Name,
                Content = message.Content,
                CreatedAt = message.CreatedAt
            };

            return Ok(response);
        }

        // ──── Delete message (hard delete) ────
        [HttpDelete("{messageId}")]
        public async Task<ActionResult> DeleteMessage([FromRoute] int messageId, [FromQuery] int userId)
        {
            if (messageId <= 0 || userId <= 0)
                return BadRequest(new { error = "Invalid IDs" });

            var message = await _db.Messages.FindAsync(messageId);
            if (message == null)
                return NotFound(new { error = "Message not found" });

            // Only sender can delete their message
            if (message.SenderId != userId)
                return Forbid();

            _db.Messages.Remove(message);
            await _db.SaveChangesAsync();

            return Ok(new { message = "Message deleted" });
        }
    }

}
