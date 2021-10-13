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
    public class RoleController : ControllerBase
    {
        private readonly IRoleRepository _roleRepository;

        public RoleController(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        // GET: Role
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _roleRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: Role/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _roleRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: Role/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(Role role)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _roleRepository.Add(role));
            }
            return BadRequest();
        }

        // POST: Role/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(Role role)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _roleRepository.Update(role));
            }
            return BadRequest();
        }

        // GET: Role/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var role = await _roleRepository.Delete(id);
                if (role == null)
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
