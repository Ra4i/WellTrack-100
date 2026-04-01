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

    public class ProgressUpdateDto
    {
        [Required] public int UserId { get; set; }
        [Required, Range(1, 100)] public int CurrentDay { get; set; }
        [Range(0, 20)] public double WaterIntake { get; set; }
        public bool WorkoutCompleted { get; set; }
        [Range(0, 24)] public double SleepHours { get; set; }
    }

    public class UserSettings
    {
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [MaxLength(10)]
        public string Language { get; set; } = "en"; // en, bg

        // UI Customization
        [MaxLength(20)]
        public string Theme { get; set; } = "light"; // light, dark

        [MaxLength(20)]
        public string Difficulty { get; set; } = "normal"; // easy, normal, hard

        // Feature toggles
        public bool EnableNotifications { get; set; } = true;
        public bool ShowMotivationalQuotes { get; set; } = true;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

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

    public class MessageDto
    {
        [Required] public int SenderId { get; set; }
        public int? ReceiverId { get; set; }
        [Required, MaxLength(2000)] public string Content { get; set; } = string.Empty;
    }

    public class UserSettingsDto
    {
        public string Language { get; set; } = "en";
        public string Theme { get; set; } = "light";
        public string Difficulty { get; set; } = "normal";
        public bool EnableNotifications { get; set; } = true;
        public bool ShowMotivationalQuotes { get; set; } = true;
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

    public class FriendDto
    {
        public int Id { get; set; }
        public int FriendUserId { get; set; }
        public string FriendName { get; set; } = string.Empty;
        public string FriendEmail { get; set; } = string.Empty;
        public DateTime ConnectedSince { get; set; }
    }

    public class FriendRequestDto
    {
        public int Id { get; set; }
        public int FromUserId { get; set; }
        public string FromName { get; set; } = string.Empty;
        public string FromEmail { get; set; } = string.Empty;
        public DateTime SentAt { get; set; }
    }

    public class SendMessageDto
    {
        [Required] public int SenderId { get; set; }
        [Required] public int ReceiverId { get; set; }
        [Required, MaxLength(2000)] public string Content { get; set; } = string.Empty;
    }

    public class ConversationMessageDto
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public int ReceiverId { get; set; }
        public string SenderName { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }
}