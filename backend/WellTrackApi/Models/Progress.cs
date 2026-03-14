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

        [Range(0, 20)]
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
}