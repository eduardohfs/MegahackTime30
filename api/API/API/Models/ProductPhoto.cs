using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class ProductPhoto : BaseEntity
    {
        public int? ProductId { get; set; }
        public Product Product { get; set; }
        public byte Image { get; set; }

        public ProductPhoto()
        {

        }
    }
}
