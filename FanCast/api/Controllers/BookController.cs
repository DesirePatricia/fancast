using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Supabase;
using Supabase.Gotrue; // For auth if needed

[ApiController]
[Route("api/[controller]")]
public class BookController : ControllerBase
{
    private readonly Client _supabase;

    public BookController(Client supabase)
    {
        _supabase = supabase;
    }

    // GET /api/Book
    [HttpGet]
    public async Task<IActionResult> GetAllBooks()
    {
        try
        {
            // Example: fetch all Books from "Books" table
            var Books = await _supabase.From<Book>().Get();
            return Ok(Books.Models);
        }
        catch (System.Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    // GET /api/Book/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetBookById(int id)
    {
        try
        {
            var BookResponse = await _supabase
                .From<Book>()
                .Where(a => a.Id == id)
                .Get();

            var Book = BookResponse.Models.Count > 0 ? BookResponse.Models[0] : null;

            if (Book == null)
                return NotFound();

            return Ok(Book);
        }
        catch (System.Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    // POST /api/Book
    [HttpPost]
    public async Task<IActionResult> CreateBook([FromBody] Book newBook)
    {
        try
        {
            var response = await _supabase
                .From<Book>()
                .Insert(newBook);

            return CreatedAtAction(nameof(GetBookById), new { id = newBook.Id }, newBook);
        }
        catch (System.Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}

public class Book
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Img { get; set; }
}
