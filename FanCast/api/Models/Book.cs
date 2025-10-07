using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace FanCast.Api.Models
{
    [Table("Books")]
    public class Book : BaseModel
    {
        [PrimaryKey("id", false)]
        public int Id { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("img")]
        public string Image { get; set; }
    }
}
