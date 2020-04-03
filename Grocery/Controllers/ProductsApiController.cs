using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Grocery.Helpers;
using Grocery.Data;
using Grocery.ViewModels;
using Grocery.Models;
using Microsoft.AspNetCore.Cors;

namespace Grocery.Controllers
{
    [Route("api")]
    [ApiController]
    public class ProductsApiController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private IOnShelfConverter _onShelfConverter;

        public ProductsApiController(ApplicationDbContext context, IOnShelfConverter onShelfConverter)
        {
            _context = context;
            _onShelfConverter = onShelfConverter;
        }

        // GET: api/products
        [HttpGet("products/all")]
        public IEnumerable<ProductOnShelf> GetAllProducts()
        {
            return _onShelfConverter.ConvertMany(_context.Products
                                                         .Include(p => p.Unit)
                                                         .Include(p => p.DiscountedProduct)
                                                         .Include(p => p.Mark));
        }

        [HttpGet("products")]
        [EnableCors("AllowOrigin")]
        public IEnumerable<ProductOnShelf> GetProducts(string sortby = "name",string category="", string name = "", string mark = "", decimal priceLow = 0, decimal priceHigh = decimal.MaxValue, int onPage = 32, int page = 1)
        {
            if (priceLow > priceHigh)
            {
                priceLow = 0;
                priceHigh = decimal.MaxValue;
            }

            if(name == null) {
                name = "";
            }
            if(mark == null)
            {
                mark = "";
            }
            if(category == null)
            {
                category = "";
            }

            var result = _context.Products.Include(p => p.Unit)
                                                         .Include(p => p.DiscountedProduct)
                                                         .Include(p => p.Mark)
                                                         .Include(p => p.Categories)
                                                         .Where(p => p.Categories.Name.Contains(category))
                                                         .Where(p => p.Mark.Name.Contains(mark))
                                                         .Where(p => p.Name.Contains(name))
                                                         .Where(p => p.Price >= priceLow && p.Price <= priceHigh);

            if (sortby.Equals("name"))
            {
                return _onShelfConverter.ConvertMany(result.OrderBy(p => p.Name)
                                                         .Skip((page - 1) * onPage)
                                                         .Take(onPage));
            }

            if (sortby.Equals("price"))
            {
                return _onShelfConverter.ConvertMany(result.OrderBy(p => p.Price)
                                                         .Skip((page - 1) * onPage)
                                                         .Take(onPage));
            }

            if (sortby.Equals("name-descending"))
            {
                return _onShelfConverter.ConvertMany(result.OrderByDescending(p => p.Name)
                                                         .Skip((page - 1) * onPage)
                                                         .Take(onPage));
            }

            if (sortby.Equals("price-descending"))
            {
                return _onShelfConverter.ConvertMany(result.OrderByDescending(p => p.Price)
                                                         .Skip((page - 1) * onPage)
                                                         .Take(onPage));
            }

            return _onShelfConverter.ConvertMany(result.Skip((page - 1) * onPage)
                                                         .Take(onPage));
        }

        // GET: api/ProductsApi/{category}
        [HttpGet("{category}")]
        [EnableCors("AllowOrigin")]
        public IEnumerable<ProductOnShelf> GetProducts([FromRoute]string category)
        {
            var matched = _context.Products.Where(product => product.Categories.Name.Equals(category))
                                           .Include(p => p.Unit)
                                           .Include(p => p.DiscountedProduct)
                                           .Include(p => p.Mark);
            var products = _onShelfConverter.ConvertMany(matched);

            return products;
        }

        [HttpGet("products/count")]
        [EnableCors("AllowOrigin")]
        public int GetCount(string name = "",string category = "", string mark = "", decimal priceLow = 0, decimal priceHigh = decimal.MaxValue)
        {
            if (priceLow > priceHigh)
            {
                priceLow = 0;
                priceHigh = decimal.MaxValue;
            }

            if (name == null)
            {
                name = "";
            }
            if (mark == null)
            {
                mark = "";
            }
            if(category == null)
            {
                category = "";
            }

            var result = _context.Products.Include(p => p.Unit)
                                                         .Include(p => p.DiscountedProduct)
                                                         .Include(p => p.Mark)
                                                         .Include(p => p.Categories)
                                                         .Where(p => p.Categories.Name.Contains(category))
                                                         .Where(p => p.Mark.Name.Contains(mark))
                                                         .Where(p => p.Name.Contains(name))
                                                         .Where(p => p.Price >= priceLow && p.Price <= priceHigh);

            return result.Count();
        }
        
        // GET: api/ProductsApi/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }

    }
}