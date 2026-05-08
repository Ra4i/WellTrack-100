namespace WellTrackAPI.DTOs.Auth
{
    public class UpdateSettingsDto
    {
        public string? Theme { get; set; }
        public string? Difficulty { get; set; }
        public bool? Notifications { get; set; }
        public bool? Quotes { get; set; }
        public string? Language { get; set; }
    }
}