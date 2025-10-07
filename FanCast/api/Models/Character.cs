using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace FanCast.Api.Models
{
    [Table("Characters")]
    public class Character : BaseModel
    {
        [PrimaryKey("id", false)]
        public int Id { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("book_id")]
        public int BookId { get; set; }
    }
}
