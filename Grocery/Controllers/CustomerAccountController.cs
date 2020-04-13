using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grocery.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Grocery.Controllers
{
    public class CustomerAccountController : Controller
    {
        private UserManager<ApplicationUser> _userManager;

        public CustomerAccountController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        [Route("api/account/register/customer")]
        public async Task<IActionResult> RegisterCustomer([FromBody]CreateUser model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new ApplicationUser { Email = model.Email, UserName = model.Username, FirsName = model.FirstName, LastName = model.LastName, JoinDate = DateTime.Now, City = model.City, Street = model.Street, HouseNumber = model.HouseNumber, LocalNumber = model.LocalNumber };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);


            return Ok(new CreateUserResponse(user));
        }

    }
}