using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using WellTrackAPI.Models;

public class JournalInfo
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ID { get; set; }

    [Required]
    public int UserId { get; set; }

    [Required]
    [JsonPropertyName("smokeDays")]
    public int SmokeDays { get; set; }

    [Required]
    [JsonPropertyName("alcoholDays")]
    public int AlcoholDays { get; set; }

    [Required]
    [JsonPropertyName("note")]
    public required string Note { get; set; }

    [Required]
    [JsonPropertyName("date")]
    public required string Date { get; set; }

    // Navigation — nullable so EF Core doesn't require it on insert
    [ForeignKey("UserId")]
    [JsonIgnore]
    public User? User { get; set; }
}