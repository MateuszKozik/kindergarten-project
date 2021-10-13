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
    public class ParentChildController : ControllerBase
    {
        private readonly IParentChildRepository _parentChildRepository;

        public ParentChildController(IParentChildRepository parentChildRepository)
        {
            _parentChildRepository = parentChildRepository;
        }

        // GET: ParentChild
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _parentChildRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: ParentChild/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _parentChildRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: ParentChild/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(ParentChild parentChild)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _parentChildRepository.Add(parentChild));
            }
            return BadRequest();
        }


        // GET: ParentChild/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var parentChild = await _parentChildRepository.Delete(id);
                if (parentChild == null)
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

