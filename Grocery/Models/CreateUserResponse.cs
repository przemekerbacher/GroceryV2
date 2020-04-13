using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Grocery.Models
{
    public class CreateUserResponse
    {
        public CreateUserResponse(ApplicationUser user)
        {
            Id = user.Id;
            UserName = user.UserName;
            Email = user.Email;
        }

        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
    }
}
