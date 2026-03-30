using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class InformationController : ControllerBase
{
    [HttpGet("home")]
    public IActionResult GetHomeInfo()
    {
        return Ok(new
        {
            Title = "Master Your Data with Precision",
            Subtitle = "The ultimate full-stack solution for modern personnel management. Fast, secure, and infinitely scalable.",
            HeroStats = new[] { "50k+ Active Users", "99.9% Uptime", "Global Support" },
            WhyChooseUs = new[]
            {
                new { Title = "Lightning Fast", Description = "Built on .NET 9 and React 19 for instantaneous response times and smooth interactions.", Icon = "Zap" },
                new { Title = "Robust Security", Description = "Enterprise-grade protection with SQL Server and best-in-class authentication patterns.", Icon = "Shield" },
                new { Title = "Modern Design", Description = "Premium glassmorphism aesthetics with fully responsive layouts for any device.", Icon = "Layout" },
                new { Title = "Scalable Architecture", Description = "Modular codebase designed to grow with your business needs without performance trade-offs.", Icon = "Rocket" }
            },
            Stats = new
            {
                Version = "1.0.0",
                Environment = "Production Ready",
                Database = "SQL Server 2022"
            }
        });
    }

    [HttpGet("about")]
    public IActionResult GetAboutInfo()
    {
        return Ok(new
        {
            Mission = "Our mission is to empower developers and businesses by providing a rock-solid foundation for CRUD operations, allowing them to focus on innovation rather than infrastructure.",
            Story = "What started as a simple youtube tutorial has evolved into a premier demonstration of modern web engineering. We bridge the gap between .NET power and React flexibility.",
            Vision = "Building premium software experiences for everyone.",
            CoreValues = new[]
            {
                new { Title = "Simplicity", Description = "Code that is easy to read, maintain, and extend." },
                new { Title = "Performance", Description = "Optimized from the database to the browser." },
                new { Title = "Integrity", Description = "Secure by design, private by default." }
            },
            Stack = new[]
            {
                ".NET 9 (Backend)",
                "React 19 (Frontend)",
                "Entity Framework Core (ORM)",
                "SQL Server (Database)",
                "Tailwind CSS (Styling)",
                "Lucide React (Icons)"
            }
        });
    }
}
