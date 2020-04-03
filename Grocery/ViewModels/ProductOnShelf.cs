using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Grocery.ViewModels
{
    public class ProductOnShelf
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal OldPrice { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public bool IsDiscounted { get; set; }
        public string Image { get; set; }
        public string Unit { get; set; }
        public string Mark { get; set; }
    }
}
