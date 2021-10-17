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
    public class SaveController : ControllerBase
    {
        private readonly ISaveRepository _saveRepository;

        public SaveController(ISaveRepository saveRepository)
        {
            _saveRepository = saveRepository;
        }

        // GET: Save
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _saveRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: Save/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _saveRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: Save/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(Save save)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _saveRepository.Add(save));
            }
            return BadRequest();
        }

        // POST: Save/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(Save save)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _saveRepository.Update(save));
            }
            return BadRequest();
        }

        // GET: Save/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var save = await _saveRepository.Delete(id);
                if (save == null)
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

        [HttpGet("Unsubscribe/{id}")]
        public async Task<IActionResult> Unsubscribe(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _saveRepository.Unsubscribe(id));
            }
            return BadRequest();
        }
    }
}
