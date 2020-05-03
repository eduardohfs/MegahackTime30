using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace API.Data.Mappings
{
    public class OrderItemMapping : IEntityTypeConfiguration<OrderItem>
    {
        public void Configure(EntityTypeBuilder<OrderItem> builder)
        {
            builder.ToTable("OrderItem");
            builder.Property(b => b.User).IsRequired();
            builder.Property(b => b.Product).IsRequired();
            builder.Property(b => b.Quantity).IsRequired();
            builder.Property(b => b.Total).IsRequired();

            builder.HasOne(b => b.User)
            .WithMany(u => u.OrderItems)
            .HasForeignKey(b => b.UserId);

            builder.HasOne(b => b.Product)
            .WithMany(p => p.OrderItems)
            .HasForeignKey(b => b.ProductId);
        }
    }
}
