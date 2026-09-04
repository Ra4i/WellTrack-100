using System.ComponentModel.DataAnnotations;

namespace WellTrackAPI.DTOs.Messages;

public class MessageDto
{
    [Required]
    public int SenderId { get; set; }

    public int? ReceiverId { get; set; }

    [Required, MaxLength(2000)]
    public string Content { get; set; } = string.Empty;
}
