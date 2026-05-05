namespace WellTrackAPI.DTOs.Messages;

public class ConversationPreviewDto
{
    public int FriendId { get; set; }
    public string FriendName { get; set; } = string.Empty;
    public string FriendEmail { get; set; } = string.Empty;
    public string LastMessage { get; set; } = string.Empty;
    public DateTime LastMessageTime { get; set; }
    public int UnreadCount { get; set; }
}
