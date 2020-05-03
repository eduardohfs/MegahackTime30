using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.ViewModels
{
    public class OrderItemViewModel : BaseViewModel
    {
        public string UserName { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public decimal Total { get; set; }
    }
}
