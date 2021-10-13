using Kindergarten.Interfaces;
using Kindergarten.Models;
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

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
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
    }
}
