using Grocery.Models;
using Grocery.ViewModels;
using System.Collections.Generic;

namespace Grocery.Helpers
{
    public class OnShelfConverter : IOnShelfConverter
    {
        public ProductOnShelf Convert(Product product)
        {
            
            var productOnShelf = new ProductOnShelf
            {
                Name = product.Name,
                Description = product.Description,
                Id = product.Id,
                Image = product.Image,
                Unit = product.Unit.Name ?? "",
                OldPrice = product.Price,
                Price = IsDiscounted(product) ? product.DiscountedProduct.NewPrice : product.Price,
                IsDiscounted = IsDiscounted(product),
                Mark = product.Mark.Name,

            };

            return productOnShelf;
        }

        public IEnumerable<ProductOnShelf> ConvertMany(IEnumerable<Product> products)
        {
            var productsOnShelfe = new ProductsEnumerable();

            foreach (var product in products)
            {
                var productOnShelf = Convert(product);
                productsOnShelfe.Add(productOnShelf);
            }

            return productsOnShelfe;
        }

        private bool IsDiscounted(Product product)
        {
            if (product.DiscountedProduct != null)
            {
                return true;
            }

            return false;
        }
    }
}
