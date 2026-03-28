using Microsoft.EntityFrameworkCore;
using WellTrackAPI.Models;

namespace WellTrackAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Progress> Progress => Set<Progress>();
        public DbSet<UserSettings> UserSettings => Set<UserSettings>();
        public DbSet<Message> Messages => Set<Message>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Unique email constraint
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            // One user has many progress entries
            modelBuilder.Entity<Progress>()
                .HasOne(p => p.User)
                .WithMany(u => u.ProgressEntries)
                .HasForeignKey(p => p.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // One user has one settings
            modelBuilder.Entity<UserSettings>()
                .HasOne(s => s.User)
                .WithOne()
                .HasForeignKey<UserSettings>(s => s.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Messages: one sender has many messages
            modelBuilder.Entity<Message>()
                .HasOne(m => m.Sender)
                .WithMany()
                .HasForeignKey(m => m.SenderId)
                .OnDelete(DeleteBehavior.Cascade);

            // Optional receiver (null for chatbot messages)
            modelBuilder.Entity<Message>()
                .HasOne(m => m.Receiver)
                .WithMany()
                .HasForeignKey(m => m.ReceiverId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}