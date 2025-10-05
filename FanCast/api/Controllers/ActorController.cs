using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Supabase;
using Supabase.Gotrue; // For auth if needed

[ApiController]
[Route("api/[controller]")]
public class ActorController : ControllerBase
{
    private readonly Client _supabase;

    public ActorController(Client supabase)
    {
        _supabase = supabase;
    }

    // GET /api/actor
    [HttpGet]
    public async Task<IActionResult> GetAllActors()
    {
        try
        {
            // Example: fetch all actors from "actors" table
            var actors = await _supabase.From<Actor>().Get();
            return Ok(actors.Models);
        }
        catch (System.Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    // GET /api/actor/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetActorById(int id)
    {
        try
        {
            var actorResponse = await _supabase
                .From<Actor>()
                .Where(a => a.Id == id)
                .Get();

            var actor = actorResponse.Models.Count > 0 ? actorResponse.Models[0] : null;

            if (actor == null)
                return NotFound();

            return Ok(actor);
        }
        catch (System.Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    // POST /api/actor
    [HttpPost]
    public async Task<IActionResult> CreateActor([FromBody] Actor newActor)
    {
        try
        {
            var response = await _supabase
                .From<Actor>()
                .Insert(newActor);

            return CreatedAtAction(nameof(GetActorById), new { id = newActor.Id }, newActor);
        }
        catch (System.Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}

// Example C# model matching your Supabase "actors" table
public class Actor
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Img { get; set; }
}
