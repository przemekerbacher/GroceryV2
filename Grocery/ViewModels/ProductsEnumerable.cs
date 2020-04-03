using Grocery.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Grocery.ViewModels
{
    public class ProductsEnumerable : IEnumerable<ProductOnShelf>
    {
        private IList<ProductOnShelf> _products = new List<ProductOnShelf>();

        public void Add(ProductOnShelf product)
        {
            _products.Add(product);
        }

        public IEnumerator<ProductOnShelf> GetEnumerator()
        {
            return _products.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _products.GetEnumerator();
        }
    }
}
