﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class OrderItem : BaseEntity
    {
        public int Quantity { get; set; }
        public decimal Total { get; set; }
        public int? UserId { get; set; }
        public int? ProductId { get; set; }
        public User User { get; set; }
        public Product Product { get; set; }

        public OrderItem()
        {

        }
    }
}
