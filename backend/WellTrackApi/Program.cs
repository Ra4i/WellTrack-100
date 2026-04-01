using Microsoft.EntityFrameworkCore;
using WellTrackAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// ── Services ──────────────────────────────────────────────────
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "WellTrack 100 API", Version = "v1" });
});

// SQLite via EF Core
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")
        ?? "Data Source=welltrack.db"));

// CORS – allow the frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:3000",
                "http://localhost:5500",
                "http://127.0.0.1:5500",
                "null"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// ── Middleware ────────────────────────────────────────────────
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("FrontendPolicy");
app.UseAuthorization();
app.MapControllers();

// ── Auto-migrate on startup ───────────────────────────────────
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    // Create new database with all tables (if not exists)
    db.Database.EnsureCreated();

    // Execute raw migrations for any missing tables
    try
    {
        var conn = db.Database.GetDbConnection();
        conn.Open();
        var cmd = conn.CreateCommand();

        // Check and create Messages table if missing
        cmd.CommandText = "SELECT name FROM sqlite_master WHERE type='table' AND name='Messages'";
        var result = cmd.ExecuteScalar();
        if (result == null)
        {
            cmd.CommandText = @"
                CREATE TABLE Messages (
                    Id INTEGER PRIMARY KEY AUTOINCREMENT,
                    SenderId INTEGER NOT NULL,
                    ReceiverId INTEGER,
                    Content TEXT NOT NULL,
                    BotResponse TEXT,
                    CreatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY(SenderId) REFERENCES Users(Id) ON DELETE CASCADE,
                    FOREIGN KEY(ReceiverId) REFERENCES Users(Id) ON DELETE SET NULL
                )
            ";
            cmd.ExecuteNonQuery();
        }

        // Check and create Friends table if missing
        cmd.CommandText = "SELECT name FROM sqlite_master WHERE type='table' AND name='Friends'";
        result = cmd.ExecuteScalar();
        if (result == null)
        {
            cmd.CommandText = @"
                CREATE TABLE Friends (
                    Id INTEGER PRIMARY KEY AUTOINCREMENT,
                    UserId INTEGER NOT NULL,
                    FriendUserId INTEGER NOT NULL,
                    CreatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY(UserId) REFERENCES Users(Id) ON DELETE CASCADE,
                    FOREIGN KEY(FriendUserId) REFERENCES Users(Id) ON DELETE CASCADE
                )
            ";
            cmd.ExecuteNonQuery();
        }

        // Check and create FriendRequests table if missing
        cmd.CommandText = "SELECT name FROM sqlite_master WHERE type='table' AND name='FriendRequests'";
        result = cmd.ExecuteScalar();
        if (result == null)
        {
            cmd.CommandText = @"
                CREATE TABLE FriendRequests (
                    Id INTEGER PRIMARY KEY AUTOINCREMENT,
                    FromUserId INTEGER NOT NULL,
                    ToUserId INTEGER NOT NULL,
                    SentAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY(FromUserId) REFERENCES Users(Id) ON DELETE CASCADE,
                    FOREIGN KEY(ToUserId) REFERENCES Users(Id) ON DELETE CASCADE
                )
            ";
            cmd.ExecuteNonQuery();
        }

        conn.Close();
    }
    catch (Exception ex)
    {
        System.Console.WriteLine($"Migration warning: {ex.Message}");
    }
}

app.Run();