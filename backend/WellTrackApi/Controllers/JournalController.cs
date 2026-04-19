using Microsoft.AspNetCore.Mvc;
using WellTrackAPI.Data;
using WellTrackAPI.Models;

[ApiController]
[Route("api/[controller]")]
public class JournalController : ControllerBase
{
    private readonly AppDbContext _db;
    public JournalController(AppDbContext db) => _db = db;

    [HttpGet]
    public IActionResult GetEntries()
    {
        var entries = _db.JournalInfo
            .OrderByDescending(j => j.ID)
            .ToList();
        return Ok(entries);
    }

    [HttpPost]
    public IActionResult SaveEntry([FromBody] JournalInfo entry)
    {
        _db.JournalInfo.Add(entry);
        _db.SaveChanges();
        return Ok(entry);
    }
}