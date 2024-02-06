using Microsoft.AspNetCore.Mvc;
using OnlineGroup.data;
using OnlineGroup.Models;

namespace OnlineGroup.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly StudentDbContext _studentDbContext;

        public WeatherForecastController(ILogger<WeatherForecastController> logger,StudentDbContext studentDbCOntext)
        {
            _logger = logger;
            _studentDbContext = studentDbCOntext;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IActionResult Get()
        {
           List<Student> list = _studentDbContext.students.ToList();
            return Ok(list);
        }


        [HttpPost]
        public IActionResult Create(Student std)
        {
            _studentDbContext.students.Add(std);
            _studentDbContext.SaveChanges();
            return Ok(std);
        }

        [HttpPost("login")]
        public IActionResult Login(LoginModel login)
        {
            List<Student> list = _studentDbContext.students.ToList();
            foreach(Student student in list)
            {
                if(student.Email == login.Email && student.Password == login.Password)
                {
                    return Ok(student);
                }
            }
           
                return BadRequest("Invalid email and password");
            
        }
    }
}
