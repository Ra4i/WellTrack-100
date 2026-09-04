using System.ComponentModel.DataAnnotations;

namespace WellTrackAPI.DTOs.Auth;

public class RegisterDto
{
    [Required]
    public string Name { get; set; } = string.Empty;

    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    public int Age { get; set; } = 0;

    [Required, MinLength(6)]
    public string Password { get; set; } = string.Empty;
}
