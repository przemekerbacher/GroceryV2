using Grocery.Models;
using Grocery.ViewModels;
using System.Collections.Generic;

namespace Grocery.Helpers
{
    public interface IOnShelfConverter
    {
        IEnumerable<ProductOnShelf> ConvertMany(IEnumerable<Product> products);
        ProductOnShelf Convert(Product product);
    }
}
