using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class User : BaseEntity
    {       
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public User()
        {

        }
        public User(string userName, string password, string role)
        {
            UserName = userName;
            Password = password;
            Role = role;
        }
    }
}
