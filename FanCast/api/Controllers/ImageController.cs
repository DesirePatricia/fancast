using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Supabase;
 
[ApiController]
[Route("api/[controller]")]
public class ImageController : ControllerBase
{
    private readonly Client _supabase;

    public ImageController(Client supabase)
    {
        _supabase = supabase;
    }

    [HttpGet("{*path}")]
    public async Task<IActionResult> GetImage(string path)
    {
        var bucket = _supabase.Storage.From("images");

        // Use single overload with only progress
        var response = await bucket.Download(path, onProgress: null);

        if (response == null || response.Length == 0)
            return NotFound();

        var contentType = path.EndsWith(".png") ? "image/png" :
                          path.EndsWith(".gif") ? "image/gif" : "image/jpeg";

        return File(response, contentType);
    }
}
