namespace WellTrackAPI.DTOs.Friends;

public class FriendRequestDto
{
    public int Id { get; set; }
    public int FromUserId { get; set; }
    public string FromName { get; set; } = string.Empty;
    public string FromEmail { get; set; } = string.Empty;
    public DateTime SentAt { get; set; }
}
