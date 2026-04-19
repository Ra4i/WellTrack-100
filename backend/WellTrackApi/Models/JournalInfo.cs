using System.ComponentModel.DataAnnotations;
public class JournalInfo
{
    [Required]
    public int ID { get; set; }
    [Required]
    public int SmokeDays { get; set; }
    [Required]
    public int AlcoholDays { get; set; }
    [Required]
    public string Note { get; set; }
    [Required]
    public string Date { get; set; }
}