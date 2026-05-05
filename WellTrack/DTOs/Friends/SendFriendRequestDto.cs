namespace WellTrackAPI.DTOs.Friends;

public class SendFriendRequestDto
{
    public int FromUserId { get; set; }
    public string ToUserEmail { get; set; } = string.Empty;
}
