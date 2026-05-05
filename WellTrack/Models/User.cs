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

        // Navigation
        public ICollection<Progress> ProgressEntries { get; set; } = new List<Progress>();
    }
}