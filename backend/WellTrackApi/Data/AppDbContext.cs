using Microsoft.EntityFrameworkCore;
using WellTrackAPI.Models;

namespace WellTrackAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Progress> Progress => Set<Progress>();

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
        }
    }
}