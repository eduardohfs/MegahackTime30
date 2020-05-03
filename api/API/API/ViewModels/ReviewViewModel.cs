using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.ViewModels
{
    public class ReviewViewModel : BaseViewModel
    {
        public int Stars { get; set; }
        public string Description { get; set; }
        public DateTime ReviewDate { get; set; }
        public string UserName { get; set; }
        public string ProductName { get; set; }
    }
}
