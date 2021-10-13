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
    public class PaymentStatusController : ControllerBase
    {
        private readonly IPaymentStatusRepository _paymentStatusRepository;

        public PaymentStatusController(IPaymentStatusRepository paymentStatusRepository)
        {
            _paymentStatusRepository = paymentStatusRepository;
        }

        // GET: PaymentStatus
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _paymentStatusRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: PaymentStatus/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _paymentStatusRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: PaymentStatus/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(PaymentStatus paymentStatus)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _paymentStatusRepository.Add(paymentStatus));
            }
            return BadRequest();
        }

        // POST: PaymentStatus/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(PaymentStatus paymentStatus)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _paymentStatusRepository.Update(paymentStatus));
            }
            return BadRequest();
        }

        // GET: PaymentStatus/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var paymentStatus = await _paymentStatusRepository.Delete(id);
                if (paymentStatus == null)
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
