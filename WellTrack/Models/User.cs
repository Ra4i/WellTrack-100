using System.ComponentModel.DataAnnotations;

namespace WellTrackAPI.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(255), EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required]
        public int Age { get; set; } = 0;

        [Required]
        public string PasswordHash { get; set; } = string.Empty;

        public DateTime StartDate { get; set; } = DateTime.UtcNow;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Settings
        public string Theme { get; set; } = "dark";
        public string Difficulty { get; set; } = "normal";
        public bool Notifications { get; set; } = true;
        public bool Quotes { get; set; } = true;
        public string Language { get; set; } = "bg";

        // Navigation
        public ICollection<Progress> ProgressEntries { get; set; } = new List<Progress>();
    }
}