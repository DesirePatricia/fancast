using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Supabase;
using FanCast.Api.Models;

[ApiController]
[Route("api/[controller]")]
public class CharacterController : ControllerBase
{
    private readonly Client _supabase;

    public CharacterController(Client supabase)
    {
        _supabase = supabase;
    }

    // GET /api/Character
    [HttpGet]
    public async Task<IActionResult> GetAllCharacters()
    {
        try
        {
            // Example: fetch all Characters from "Characters" table
            var Characters = await _supabase.From<Character>().Get();
            return Ok(Characters.Models);
        }
        catch (System.Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    // GET /api/Character/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetCharacterById(int id)
    {
        try
        {
            var CharacterResponse = await _supabase
                .From<Character>()
                .Where(a => a.Id == id)
                .Get();

            var Character = CharacterResponse.Models.Count > 0 ? CharacterResponse.Models[0] : null;

            if (Character == null)
                return NotFound();

            return Ok(Character);
        }
        catch (System.Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    // POST /api/Character
    [HttpPost]
    public async Task<IActionResult> CreateCharacter([FromBody] Character newCharacter)
    {
        try
        {
            var response = await _supabase
                .From<Character>()
                .Insert(newCharacter);

            return CreatedAtAction(nameof(GetCharacterById), new { id = newCharacter.Id }, newCharacter);
        }
        catch (System.Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}

