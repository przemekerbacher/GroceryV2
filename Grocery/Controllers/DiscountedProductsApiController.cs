using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Grocery.Models;
using Grocery.Helpers;
using Microsoft.EntityFrameworkCore;
using Grocery.Data;
using Grocery.ViewModels;

namespace Grocery.Controllers
{
    [Route("api/discounted")]
    [ApiController]
    public class DiscountedProductsApiController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private IOnShelfConverter _onShelfConverter;
        private IEnumerable<Product> _products;

        public DiscountedProductsApiController(ApplicationDbContext context, IOnShelfConverter onShelfConverter)
        {
            _context = context;
            _onShelfConverter = onShelfConverter;
            _products = GetProducts();
        }

        // GET: api/DiscountedProductsApi
        [HttpGet]
        public IEnumerable<ProductOnShelf> GetDiscountedProduct()
        {
            var products = _onShelfConverter.ConvertMany(_products);

            return products;
        }

        // GET: api/DiscountedProductsApi/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDiscountedProduct([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var discountedProduct = await _context.DiscountedProducts.FindAsync(id);

            if (discountedProduct == null)
            {
                return NotFound();
            }

            return Ok(discountedProduct);
        }

        private IEnumerable<Product> GetProducts(){
            return _context.Products.Where(product => product.DiscountedProduct != null)
                                    .Include(p => p.Unit)
                                    .Include(p => p.DiscountedProduct);
        }


    }
}