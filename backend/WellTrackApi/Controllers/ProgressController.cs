using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WellTrackAPI.Data;
using WellTrackAPI.Models;

namespace WellTrackAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProgressController : ControllerBase
    {
        private readonly AppDbContext _db;

        public ProgressController(AppDbContext db)
        {
            _db = db;
        }

        // GET /api/progress?userId=1
        [HttpGet]
        public async Task<IActionResult> GetProgress([FromQuery] int userId)
        {
            if (userId <= 0)
                return BadRequest(new { error = "userId is required." });

            var entries = await _db.Progress
                .Where(p => p.UserId == userId)
                .OrderBy(p => p.CurrentDay)
                .ToListAsync();

            return Ok(entries);
        }

        // POST /api/progress/update
        [HttpPost("update")]
        public async Task<IActionResult> Update([FromBody] ProgressUpdateDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userExists = await _db.Users.AnyAsync(u => u.Id == dto.UserId);
            if (!userExists)
                return NotFound(new { error = "User not found." });

            // Upsert: update existing entry for that day, or create new
            var existing = await _db.Progress.FirstOrDefaultAsync(
                p => p.UserId == dto.UserId && p.CurrentDay == dto.CurrentDay);

            if (existing != null)
            {
                existing.WaterIntake = dto.WaterIntake;
                existing.WorkoutCompleted = dto.WorkoutCompleted;
                existing.SleepHours = dto.SleepHours;
                existing.Date = DateTime.UtcNow;
            }
            else
            {
                var entry = new Progress
                {
                    UserId = dto.UserId,
                    CurrentDay = dto.CurrentDay,
                    WaterIntake = dto.WaterIntake,
                    WorkoutCompleted = dto.WorkoutCompleted,
                    SleepHours = dto.SleepHours,
                    Date = DateTime.UtcNow
                };
                _db.Progress.Add(entry);
            }

            await _db.SaveChangesAsync();
            return Ok(new { message = "Progress saved." });
        }

        // GET /api/progress/summary?userId=1
        [HttpGet("summary")]
        public async Task<IActionResult> GetSummary([FromQuery] int userId)
        {
            var entries = await _db.Progress
                .Where(p => p.UserId == userId)
                .ToListAsync();

            if (!entries.Any())
                return Ok(new { daysLogged = 0, workoutDays = 0, avgWater = 0.0, avgSleep = 0.0 });

            return Ok(new
            {
                daysLogged = entries.Count,
                workoutDays = entries.Count(e => e.WorkoutCompleted),
                avgWater = Math.Round(entries.Average(e => e.WaterIntake), 2),
                avgSleep = Math.Round(entries.Average(e => e.SleepHours), 2)
            });
        }
    }
}