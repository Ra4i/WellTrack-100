using System.ComponentModel.DataAnnotations;

namespace WellTrackAPI.Models
{
    public class Friend
    {
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public int FriendUserId { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        public User? User { get; set; }
        public User? FriendUser { get; set; }
    }
}