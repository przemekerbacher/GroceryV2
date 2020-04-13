using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Grocery.Models
{
    public class CreateUser
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Username")]
        public string Username { get; set; }

        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} can be maximum {1} characters long.")]
        public string City { get; set; }

        [Required]
        [StringLength(200, ErrorMessage = "The {0} can be maximum {1} characters long.")]
        public string Street { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "The {0} can be maximum {1} characters long.")]
        public string HouseNumber { get; set; }

        [StringLength(50, ErrorMessage = "The {0} can be maximum {1} characters long.")]
        public string LocalNumber { get; set; }
    }
}
