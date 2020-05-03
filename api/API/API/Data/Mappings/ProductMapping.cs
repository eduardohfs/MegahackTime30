using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Mappings
{
    public class ProductMapping : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("Product");
            builder.Property(b => b.Name).IsRequired().HasMaxLength(200);
            builder.Property(b => b.Code).IsRequired().HasMaxLength(20);
            builder.Property(b => b.Category).IsRequired().HasMaxLength(200);
            builder.Property(b => b.Description).IsRequired().HasMaxLength(1000);
            builder.Property(b => b.Weight).IsRequired();
            builder.Property(b => b.Length).IsRequired();
            builder.Property(b => b.Height).IsRequired();
            builder.Property(b => b.Width).IsRequired();
            builder.Property(b => b.Recurrence).IsRequired();
            builder.Property(b => b.SelfCheckout).IsRequired();
            builder.Property(b => b.Price).IsRequired();
        }
    }
}
