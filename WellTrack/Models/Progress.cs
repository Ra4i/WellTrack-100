using System.ComponentModel.DataAnnotations;

namespace WellTrackAPI.Models
{
    public class Progress
    {
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Range(1, 100)]
        public int CurrentDay { get; set; }

        [Range(0, 10)]
        public double WaterIntake { get; set; }   // litres

        public bool WorkoutCompleted { get; set; }

        [Range(0, 24)]
        public double SleepHours { get; set; }

        public DateTime Date { get; set; } = DateTime.UtcNow;

        // Navigation
        public User? User { get; set; }
    }

    public class Message
    {
        public int Id { get; set; }

        [Required]
        public int SenderId { get; set; }

        public int? ReceiverId { get; set; } // null = message to chatbot

        [Required, MaxLength(2000)]
        public string Content { get; set; } = string.Empty;

        [MaxLength(500)]
        public string? BotResponse { get; set; } // filled if chatbot message

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        public User? Sender { get; set; }
        public User? Receiver { get; set; }
    }

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