using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IRoleRepository _roleRepository;
        private readonly IJwtAutenticationManager _jwtAutenticationManager;


        public UserController(IUserRepository userRepository, IRoleRepository roleRepository, IJwtAutenticationManager jwtAutenticationManager)
        {
            _userRepository = userRepository;
            _roleRepository = roleRepository;
            _jwtAutenticationManager = jwtAutenticationManager;

        }

        // GET: User
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _userRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: User/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _userRepository.Get(id));
            }
            return BadRequest();
        }

        // GET: User/Email/{email}
        [HttpGet("Email/{email}")]
        public async Task<IActionResult> GetByEmail(string email)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _userRepository.GetByEmail(email));
            }
            return BadRequest();
        }

        // POST: User/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(User user)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _userRepository.Add(user));
            }
            return BadRequest();
        }

        // POST: User/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(User user)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _userRepository.Update(user));
            }
            return BadRequest();
        }

        // GET: User/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var user = await _userRepository.Delete(id);
                if (user == null)
                {
                    return BadRequest();
                }
                else
                {
                    return Ok("deleted");
                }
            }
            return BadRequest();
        }

        // POST: Register/Employee
        [HttpPost("Register/Employee")]
        public async Task<IActionResult> RegisterEmployee(User user)
        {
            if (ModelState.IsValid)
            {
                User us = await _userRepository.GetByEmail(user.Email);
                if (us == null)
                    return Ok(await _userRepository.RegisterEmployee(user));
                return BadRequest("exist");
            }
            return BadRequest();
        }

        // POST: User/Register/Parent
        [HttpPost("Register/Parent")]
        public async Task<IActionResult> RegisterParent(User user)
        {
            if (ModelState.IsValid)
            {
                User us = await _userRepository.GetByEmail(user.Email);
                if (us == null)
                    return Ok(await _userRepository.RegisterParent(user));
                return BadRequest("exist");
            }
            return BadRequest();
        }

        // POST: User/Login
        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<IActionResult> Login(User user)
        {
            User us = await _userRepository.GetByEmail(user.Email);
            if (us == null)
                return Unauthorized("not exist");
            bool verified = BCrypt.Net.BCrypt.Verify(user.Password, us.Password);

            if (!verified)
                return Unauthorized("wrong password");

            Role role = await _roleRepository.Get(us.RoleId);

            var token = _jwtAutenticationManager.Authenticate(us, role);

            if (token == null)
                return Unauthorized("no token");

            return Ok(token);
        }
    }
}
