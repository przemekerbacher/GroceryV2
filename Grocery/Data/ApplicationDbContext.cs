﻿using Grocery.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Grocery.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<DiscountedProduct> DiscountedProducts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Unit> Units { get; set; }
        public DbSet<Mark> Marks { get; set; }
    }
}
