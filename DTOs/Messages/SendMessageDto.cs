using System.ComponentModel.DataAnnotations;

namespace WellTrackAPI.DTOs.Messages;

public class SendMessageDto
{
    [Required]
    public int SenderId { get; set; }

    [Required]
    public int ReceiverId { get; set; }

    [Required, MaxLength(2000)]
    public string Content { get; set; } = string.Empty;
}
