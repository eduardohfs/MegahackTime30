using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Repositories;
using API.Services;
using API.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly AuthenticationService _authenticationService;

        public AuthenticationController(AuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        [HttpPost]
        [Route("authenticate")]
        public ActionResult<dynamic> Authenticate([FromBody]AuthViewModel model)
        {
            var token = _authenticationService.GenerateToken(model);

            if (token == null)
                return NotFound(new { message = "Usuário ou senha inválidos" });

            return new { token };
        }

        [HttpPost]
        [Route("register")]
        public ActionResult Register([FromBody]AuthViewModel model)
        {
            var newUser = _authenticationService.Register(model);

            if (newUser == null)
                return NotFound(new { message = "Erro ao salvar usuário" });

            return Ok();
        }
    }
}