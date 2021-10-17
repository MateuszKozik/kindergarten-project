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
    public class ParentController : ControllerBase
    {
        private readonly IParentRepository _parentRepository;

        public ParentController(IParentRepository parentRepository)
        {
            _parentRepository = parentRepository;
        }

        // GET: Parent
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _parentRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: Parent/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _parentRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: Parent/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(Parent parent)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _parentRepository.Add(parent));
            }
            return BadRequest();
        }

        // POST: Parent/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(Parent parent)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _parentRepository.Update(parent));
            }
            return BadRequest();
        }

        // GET: Parent/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var parent = await _parentRepository.Delete(id);
                if (parent == null)
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

        // GET: Parent/GetByUser/userId
        [HttpGet("GetByUser/{userId}")]
        public async Task<IActionResult> GetByUser(int userId)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _parentRepository.GetByUser(userId));
            }
            return BadRequest();
        }
    }
}
