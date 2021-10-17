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
    public class ChildController : ControllerBase
    {
        private readonly IChildRepository _childRepository;

        public ChildController(IChildRepository childRepository)
        {
            _childRepository = childRepository;
        }

        // GET: Child
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _childRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: Child/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _childRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: Child/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(Child child)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _childRepository.Add(child));
            }
            return BadRequest();
        }

        // POST: Child/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(Child child)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _childRepository.Update(child));
            }
            return BadRequest();
        }

        // GET: Child/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var child = await _childRepository.Delete(id);
                if (child == null)
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

        [HttpPost("AddByParent/{parentId}")]
        public async Task<IActionResult> AddByParent(Child child, int parentId)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _childRepository.AddByParent(child, parentId));
            }
            return BadRequest();
        }

        [HttpGet("GetByParent/{parentId}")]
        public async Task<IActionResult> GetByParent(int parentId)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _childRepository.GetByParent(parentId));
            }
            return BadRequest();
        }

        [HttpGet("GetByGroup/{groupId}")]
        public async Task<IActionResult> GetByGroup(int groupId)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _childRepository.GetByGroup(groupId));
            }
            return BadRequest();
        }

        [HttpGet("IsSaved/{id}")]
        public async Task<IActionResult> IsSaved(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _childRepository.IsSaved(id));
            }
            return BadRequest();
        }
    }
}
