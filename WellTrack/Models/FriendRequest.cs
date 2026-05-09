using System.ComponentModel.DataAnnotations;

namespace WellTrackAPI.Models
{
    public class FriendRequest
    {
        public int Id { get; set; }

        [Required]
        public int FromUserId { get; set; }

        [Required]
        public int ToUserId { get; set; }

        public DateTime SentAt { get; set; } = DateTime.UtcNow;

        // Navigation
        public User? FromUser { get; set; }
        public User? ToUser { get; set; }
    }
}