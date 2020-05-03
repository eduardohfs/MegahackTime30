using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Mappings
{
    public class ProductPhotoMapping : IEntityTypeConfiguration<ProductPhoto>
    {
        public void Configure(EntityTypeBuilder<ProductPhoto> builder)
        {
            builder.ToTable("ProductPhoto");
            builder.Property(b => b.Product).IsRequired();
            builder.Property(b => b.Image).IsRequired();

            builder.HasOne(b => b.Product)
                .WithMany(p => p.ProductPhotos)
                .HasForeignKey(b => b.ProductId);
        }
    }
}
