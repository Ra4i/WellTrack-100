using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QRCoder;
using WellTrackAPI.Data;
using WellTrackAPI.DTOs.Auth;
using WellTrackAPI.Models;


namespace WellTrackAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _db;

        public UsersController(AppDbContext db)
        {
            _db = db;
        }

        // POST /api/users/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var exists = await _db.Users.AnyAsync(u => u.Email == dto.Email.ToLower());
            if (exists)
                return Conflict(new { error = "Email already registered." });

            var user = new User
            {
                Name = dto.Name.Trim(),
                Email = dto.Email.Trim().ToLower(),
                Age = dto.Age,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                StartDate = DateTime.UtcNow
            };

            _db.Users.Add(user);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = user.Id }, ToDto(user));
        }

        // POST /api/users/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == dto.Email.ToLower());
            if (user == null)
                return Unauthorized(new { error = "No account found with this email address", errorCode = "NoUser" });

            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash))
                return Unauthorized(new { error = "Incorrect password, please try again", errorCode = "WrongPassword" });

            return Ok(ToDto(user));
        }

        // GET /api/users
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _db.Users.Select(u => ToDto(u)).ToListAsync();
            return Ok(users);
        }

        // GET /api/users/{id}
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _db.Users.FindAsync(id);
            if (user == null) return NotFound();
            return Ok(ToDto(user));
        }

        // PUT /api/users/{id}/settings
        [HttpPut("{id:int}/settings")]
        public async Task<IActionResult> UpdateSettings(int id, [FromBody] UpdateSettingsDto dto)
        {
            var user = await _db.Users.FindAsync(id);
            if (user == null) return NotFound(new { error = "User not found" });

            if (!string.IsNullOrEmpty(dto.Theme)) user.Theme = dto.Theme;
            if (!string.IsNullOrEmpty(dto.Difficulty)) user.Difficulty = dto.Difficulty;
            if (dto.Notifications.HasValue) user.Notifications = dto.Notifications.Value;
            if (dto.Quotes.HasValue) user.Quotes = dto.Quotes.Value;
            if (!string.IsNullOrEmpty(dto.Language)) user.Language = dto.Language;

            await _db.SaveChangesAsync();
            return Ok(new { message = "Settings saved successfully" });
        }

        private static UserResponseDto ToDto(User u) => new()
        {
            Id = u.Id,
            Name = u.Name,
            Email = u.Email,
            Age = u.Age,
            StartDate = u.StartDate,
            Theme = u.Theme,
            Difficulty = u.Difficulty,
            Notifications = u.Notifications,
            Quotes = u.Quotes,
            Language = u.Language
        };
        
        [HttpPost("generate-age-qr/{id:int}/{age:int}")]
        public IActionResult GenerateAgeQr([FromRoute] int id, [FromRoute] int age)
        {
            try
            {
                string folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "qrcodes");

                if (!Directory.Exists(folderPath))
                    Directory.CreateDirectory(folderPath);

                // Включваме възрастта в името, за да е уникално за всяка промяна
                string fileName = $"user_{id}_age_{age}.png";
                string filePath = Path.Combine(folderPath, fileName);

                using (QRCodeGenerator qrGenerator = new QRCodeGenerator())
                using (QRCodeData qrCodeData = qrGenerator.CreateQrCode($"Age: {age}", QRCodeGenerator.ECCLevel.Q))
                using (PngByteQRCode qrCode = new PngByteQRCode(qrCodeData))
                {
                    byte[] qrCodeBytes = qrCode.GetGraphic(20);
                    System.IO.File.WriteAllBytes(filePath, qrCodeBytes);
                }

                // Връщаме URL пътя
                return Ok(new { url = $"/qrcodes/{fileName}" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Грешка: {ex.Message}" });
            }
        }
    }
}