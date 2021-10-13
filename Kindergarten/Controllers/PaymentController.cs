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
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentRepository _paymentRepository;

        public PaymentController(IPaymentRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }

        // GET: Payment
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _paymentRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: Payment/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _paymentRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: Payment/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(Payment payment)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _paymentRepository.Add(payment));
            }
            return BadRequest();
        }

        // POST: Payment/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(Payment payment)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _paymentRepository.Update(payment));
            }
            return BadRequest();
        }

        // GET: Payment/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var payment = await _paymentRepository.Delete(id);
                if (payment == null)
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

