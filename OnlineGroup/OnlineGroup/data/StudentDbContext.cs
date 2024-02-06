using Microsoft.EntityFrameworkCore;
using OnlineGroup.Models;

namespace OnlineGroup.data
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options)
        {

        }
        public DbSet<Student> students { get; set; }
    }
}
