namespace WellTrackAPI.DTOs.Auth;

public class UserResponseDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public int Age { get; set; }
    public DateTime StartDate { get; set; }
    public string Theme { get; set; } = "dark";
    public string Difficulty { get; set; } = "normal";
    public bool Notifications { get; set; } = true;
    public bool Quotes { get; set; } = true;
    public string Language { get; set; } = "bg";
}
