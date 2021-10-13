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
    public class AddressController : ControllerBase
    {
        private readonly IAddressRepository _addressRepository;

        public AddressController(IAddressRepository addressRepository)
        {
            _addressRepository = addressRepository;
        }

        // GET: Address
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _addressRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: Address/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _addressRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: Address/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(Address address)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _addressRepository.Add(address));
            }
            return BadRequest();
        }

        // POST: Address/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(Address address)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _addressRepository.Update(address));
            }
            return BadRequest();
        }

        // GET: Address/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var address = await _addressRepository.Delete(id);
                if (address == null)
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
