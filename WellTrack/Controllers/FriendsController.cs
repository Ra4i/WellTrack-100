using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WellTrackAPI.Data;
using WellTrackAPI.Models;

namespace WellTrackAPI.Controllers
{
    [ApiController]
    [Route("api/friends")]
    public class FriendsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public FriendsController(AppDbContext db)
        {
            _db = db;
        }

        // ──── Get user's friends list ────
        [HttpGet("list")]
        public async Task<ActionResult<List<FriendDto>>> GetFriends([FromQuery] int userId)
        {
            if (userId <= 0)
                return BadRequest(new { error = "Invalid userId" });

            var friends = await _db.Friends
                .Where(f => f.UserId == userId)
                .Include(f => f.FriendUser)
                .Select(f => new FriendDto
                {
                    Id = f.Id,
                    FriendUserId = f.FriendUserId,
                    FriendName = f.FriendUser!.Name,
                    FriendEmail = f.FriendUser.Email,
                    ConnectedSince = f.CreatedAt
                })
                .ToListAsync();

            return Ok(friends);
        }

        // ──── Get pending friend requests TO this user ────
        [HttpGet("requests")]
        public async Task<ActionResult<List<FriendRequestDto>>> GetPendingRequests([FromQuery] int userId)
        {
            if (userId <= 0)
                return BadRequest(new { error = "Invalid userId" });

            var requests = await _db.FriendRequests
                .Where(fr => fr.ToUserId == userId)
                .Include(fr => fr.FromUser)
                .Select(fr => new FriendRequestDto
                {
                    Id = fr.Id,
                    FromUserId = fr.FromUserId,
                    FromName = fr.FromUser!.Name,
                    FromEmail = fr.FromUser.Email,
                    SentAt = fr.SentAt
                })
                .ToListAsync();

            return Ok(requests);
        }

        // ──── Send friend request ────
        [HttpPost("request")]
        public async Task<ActionResult> SendFriendRequest([FromBody] SendFriendRequestDto dto)
        {
            if (string.IsNullOrWhiteSpace(dto.ToUserEmail) || dto.FromUserId <= 0)
                return BadRequest(new { error = "Invalid request data" });

            var fromUser = await _db.Users.FindAsync(dto.FromUserId);
            if (fromUser == null)
                return NotFound(new { error = "From user not found" });

            var toUser = await _db.Users.FirstOrDefaultAsync(u => u.Email.ToLower() == dto.ToUserEmail.ToLower());
            if (toUser == null)
                return NotFound(new { error = "User not found" });

            if (fromUser.Id == toUser.Id)
                return BadRequest(new { error = "Cannot send request to yourself" });

            // Check if already friends
            var existing = await _db.Friends
                .FirstOrDefaultAsync(f => f.UserId == dto.FromUserId && f.FriendUserId == toUser.Id);
            if (existing != null)
                return Conflict(new { error = "Already friends" });

            // Check if request already exists
            var existingRequest = await _db.FriendRequests
                .FirstOrDefaultAsync(fr => fr.FromUserId == dto.FromUserId && fr.ToUserId == toUser.Id);
            if (existingRequest != null)
                return Conflict(new { error = "Friend request already sent" });

            var request = new FriendRequest
            {
                FromUserId = dto.FromUserId,
                ToUserId = toUser.Id,
                SentAt = DateTime.UtcNow
            };

            _db.FriendRequests.Add(request);
            await _db.SaveChangesAsync();

            return Ok(new { message = "Friend request sent" });
        }

        // ──── Accept friend request ────
        [HttpPost("accept")]
        public async Task<ActionResult> AcceptFriendRequest([FromBody] RespondFriendRequestDto dto)
        {
            if (dto.FromUserId <= 0 || dto.ToUserId <= 0)
                return BadRequest(new { error = "Invalid request data" });

            var request = await _db.FriendRequests
                .FirstOrDefaultAsync(fr => fr.FromUserId == dto.FromUserId && fr.ToUserId == dto.ToUserId);

            if (request == null)
                return NotFound(new { error = "Friend request not found" });

            // Create bidirectional friendship
            var friend1 = new Friend
            {
                UserId = dto.ToUserId,
                FriendUserId = dto.FromUserId,
                CreatedAt = DateTime.UtcNow
            };

            var friend2 = new Friend
            {
                UserId = dto.FromUserId,
                FriendUserId = dto.ToUserId,
                CreatedAt = DateTime.UtcNow
            };

            _db.Friends.Add(friend1);
            _db.Friends.Add(friend2);
            _db.FriendRequests.Remove(request);

            await _db.SaveChangesAsync();

            return Ok(new { message = "Friend request accepted" });
        }

        // ──── Decline friend request ────
        [HttpPost("decline")]
        public async Task<ActionResult> DeclineFriendRequest([FromBody] RespondFriendRequestDto dto)
        {
            if (dto.FromUserId <= 0 || dto.ToUserId <= 0)
                return BadRequest(new { error = "Invalid request data" });

            var request = await _db.FriendRequests
                .FirstOrDefaultAsync(fr => fr.FromUserId == dto.FromUserId && fr.ToUserId == dto.ToUserId);

            if (request == null)
                return NotFound(new { error = "Friend request not found" });

            _db.FriendRequests.Remove(request);
            await _db.SaveChangesAsync();

            return Ok(new { message = "Friend request declined" });
        }

        // ──── Remove friend ────
        [HttpDelete("{friendId}")]
        public async Task<ActionResult> RemoveFriend([FromRoute] int friendId, [FromQuery] int userId)
        {
            if (friendId <= 0 || userId <= 0)
                return BadRequest(new { error = "Invalid IDs" });

            var friend = await _db.Friends.FindAsync(friendId);
            if (friend == null || friend.UserId != userId)
                return NotFound(new { error = "Friend connection not found" });

            var reverseFriend = await _db.Friends
                .FirstOrDefaultAsync(f => f.UserId == friend.FriendUserId && f.FriendUserId == friend.UserId);

            _db.Friends.Remove(friend);
            if (reverseFriend != null)
                _db.Friends.Remove(reverseFriend);

            await _db.SaveChangesAsync();

            return Ok(new { message = "Friend removed" });
        }
    }

    // DTOs for Friend requests
    public class SendFriendRequestDto
    {
        public int FromUserId { get; set; }
        public string ToUserEmail { get; set; } = string.Empty;
    }

    public class RespondFriendRequestDto
    {
        public int FromUserId { get; set; }
        public int ToUserId { get; set; }
    }
}
