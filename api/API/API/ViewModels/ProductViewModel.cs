using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.ViewModels
{
    public class ProductViewModel : BaseViewModel
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public decimal Weight { get; set; }
        public decimal Length { get; set; }
        public decimal Height { get; set; }
        public decimal Width { get; set; }
        public bool Recurrence { get; set; }
        public bool SelfCheckout { get; set; }
        public decimal Price { get; set; }
    }
}
