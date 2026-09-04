namespace WellTrackAPI.DTOs.Friends;

public class FriendDto
{
    public int Id { get; set; }
    public int FriendUserId { get; set; }
    public string FriendName { get; set; } = string.Empty;
    public string FriendEmail { get; set; } = string.Empty;
    public DateTime ConnectedSince { get; set; }
}
