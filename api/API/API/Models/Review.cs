using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Review : BaseEntity
    {
        public int Stars { get; set; }
        public string Description { get; set; }
        public DateTime ReviewDate { get; set; }
        public int? UserId { get; set; }
        public int? ProductId { get; set; }
        public User User { get; set; }
        public Product Product { get; set; }

        public Review()
        {

        }
    }
}
