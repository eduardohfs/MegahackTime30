using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace API.Data.Mappings
{
    public class ReviewMapping : IEntityTypeConfiguration<Review>
    {
        public void Configure(EntityTypeBuilder<Review> builder)
        {
            builder.ToTable("Review");
            builder.Property(b => b.Stars).IsRequired();
            builder.Property(b => b.Description).HasMaxLength(500);
            builder.Property(b => b.ReviewDate).IsRequired();
            builder.Property(b => b.User).IsRequired();
            builder.Property(b => b.Product).IsRequired();

            builder.HasOne(b => b.User)
                .WithMany(u => u.Reviews)
                .HasForeignKey(b => b.UserId);

            builder.HasOne(b => b.Product)
                .WithMany(p => p.Reviews)
                .HasForeignKey(b => b.ProductId);
        }
    }
}
