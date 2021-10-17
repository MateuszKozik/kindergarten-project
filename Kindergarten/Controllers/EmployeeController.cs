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
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        // GET: Employee
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (ModelState.IsValid)
            {
                return Ok(await _employeeRepository.GetAll());
            }
            return BadRequest();
        }
        // GET: Employee/id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _employeeRepository.Get(id));
            }
            return BadRequest();
        }
        // POST: Employee/Add
        [HttpPost("Add")]
        public async Task<IActionResult> Add(Employee employee)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _employeeRepository.Add(employee));
            }
            return BadRequest();
        }

        // POST: Employee/Update
        [HttpPost("Update")]
        public async Task<IActionResult> Update(Employee employee)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _employeeRepository.Update(employee));
            }
            return BadRequest();
        }

        // GET: Employee/Delete/id
        [HttpGet("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (ModelState.IsValid)
            {
                var employee = await _employeeRepository.Delete(id);
                if (employee == null)
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

        [HttpGet("GetByUser/{userId}")]
        public async Task<IActionResult> GetByUser(int userId)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _employeeRepository.GetByUser(userId));
            }
            return BadRequest();
        }
    }
}
