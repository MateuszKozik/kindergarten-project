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
    public class GroupController : ControllerBase
    {
        private readonly IGroupRepository _groupRepository;

        public GroupController(IGroupRepository groupRepository)
        {
            _groupRepository = groupRepository;
        }

        // GET: Group
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _groupRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: Group/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _groupRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: Group/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(Group group)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _groupRepository.Add(group));
            }
            return BadRequest();
        }

        // POST: Group/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(Group group)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _groupRepository.Update(group));
            }
            return BadRequest();
        }

        // GET: Group/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var group = await _groupRepository.Delete(id);
                if (group == null)
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

        // GET: Group/GetByEmployee/employeeId
        [HttpGet("GetByEmployee/{employeeId}")]
        public async Task<IActionResult> GetByEmployee(int employeeId)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _groupRepository.GetByEmployee(employeeId));
            }
            return BadRequest();
        }

        // GET: Group/GetAllActive
        [HttpGet("GetAllActive")]
        public async Task<IActionResult> GetAllActive()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _groupRepository.GetAllActive());
            }
            return BadRequest();
        }
    }
}
