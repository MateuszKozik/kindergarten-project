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
    public class PayoutController : ControllerBase
    {
        private readonly IPayoutRepository _payoutRepository;

        public PayoutController(IPayoutRepository payoutRepository)
        {
            _payoutRepository = payoutRepository;
        }

        // GET: Payout
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _payoutRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: Payout/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _payoutRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: Payout/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(Payout payout)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _payoutRepository.Add(payout));
            }
            return BadRequest();
        }

        // POST: Payout/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(Payout payout)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _payoutRepository.Update(payout));
            }
            return BadRequest();
        }

        // GET: Payout/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var payout = await _payoutRepository.Delete(id);
                if (payout == null)
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
