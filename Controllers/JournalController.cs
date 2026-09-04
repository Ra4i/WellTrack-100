using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WellTrackAPI.Data;
using WellTrackAPI.Models;

[ApiController]
[Route("api/[controller]")]
public class JournalController : ControllerBase
{
    private readonly AppDbContext _db;
    public JournalController(AppDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetEntries([FromQuery] int userId)
    {
        if (userId <= 0)
            return BadRequest(new { error = "userId is required." });

        var entries = await _db.JournalInfo
            .Where(j => j.UserId == userId)
            .OrderByDescending(j => j.ID)
            .ToListAsync();

        return Ok(entries);
    }

    [HttpPost]
    public async Task<IActionResult> SaveEntry([FromQuery] int userId, [FromBody] JournalInfo entry)
    {
        if (userId <= 0)
            return BadRequest(new { error = "userId is required." });

        var userExists = await _db.Users.AnyAsync(u => u.Id == userId);
        if (!userExists)
            return NotFound(new { error = "User not found." });

        entry.ID = 0;        // Let the DB generate the PK
        entry.UserId = userId;
        entry.User = null!;  // Detach nav property — EF resolves via FK

        _db.JournalInfo.Add(entry);
        await _db.SaveChangesAsync();

        return Ok(entry);
    }
}