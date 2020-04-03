using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Grocery.Models
{
    [Table("DiscountedProducts")]
    public class DiscountedProduct
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public decimal NewPrice { get; set; }

        public int ProductId { get; set; }

        [Required]
        public Product Product { get; set; }
    }
}
