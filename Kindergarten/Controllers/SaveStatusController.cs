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
    public class SaveStatusController : ControllerBase
    {
        private readonly ISaveStatusRepository _saveStatusRepository;

        public SaveStatusController(ISaveStatusRepository saveStatusRepository)
        {
            _saveStatusRepository = saveStatusRepository;
        }

        // GET: SaveStatus
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _saveStatusRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: SaveStatus/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _saveStatusRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: SaveStatus/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(SaveStatus saveStatus)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _saveStatusRepository.Add(saveStatus));
            }
            return BadRequest();
        }

        // POST: SaveStatus/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(SaveStatus saveStatus)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _saveStatusRepository.Update(saveStatus));
            }
            return BadRequest();
        }

        // GET: SaveStatus/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var saveStatus = await _saveStatusRepository.Delete(id);
                if (saveStatus == null)
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
