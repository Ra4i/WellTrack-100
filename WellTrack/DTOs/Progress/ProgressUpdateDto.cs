using System.ComponentModel.DataAnnotations;

namespace WellTrackAPI.DTOs.Progress;

public class ProgressUpdateDto
{
    [Required]
    public int UserId { get; set; }

    [Required, Range(1, 100)]
    public int CurrentDay { get; set; }

    [Range(0, 20)]
    public double WaterIntake { get; set; }

    public bool WorkoutCompleted { get; set; }

    [Range(0, 24)]
    public double SleepHours { get; set; }
}
