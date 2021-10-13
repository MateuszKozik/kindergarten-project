using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DatabaseContext _context;
        public EmployeeRepository(DatabaseContext context) { _context = context; }

        public async Task<Employee> Add(Employee employee)
        {
            Employee emp = new Employee
            {
                Name = employee.Name,
                Surname = employee.Surname,
                AddressId = employee.AddressId,
                PhoneNumber = employee.PhoneNumber,
                Position = employee.Position,
                Salary = employee.Salary,
                UserId = employee.UserId
            };

            _context.Add(emp);
            await _context.SaveChangesAsync();

            return emp;
        }

        public async Task<Employee> Get(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            return employee;
        }

        public async Task<IEnumerable<Employee>> GetAll()
        {
            var employee = await _context.Employees.ToListAsync();
            return employee;
        }

        public async Task<Employee> Delete(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee != null)
            {
                _context.Employees.Remove(employee);
                await _context.SaveChangesAsync();
            }

            return employee;
        }
        public async Task<Employee> Update(Employee employee)
        {
            Employee emp = null;


            emp = await _context.Employees
                .Where(s => s.Id == employee.Id)
                .FirstOrDefaultAsync<Employee>();

            if (emp != null)
            {
                emp.Name = employee.Name;
                emp.Surname = employee.Surname;
                emp.AddressId = employee.AddressId;
                emp.UserId = employee.UserId;
                emp.PhoneNumber = employee.PhoneNumber;
                emp.Position = employee.Position;
                emp.Salary = employee.Salary;
                await _context.SaveChangesAsync();
            }
            return emp;
        }
    }
}

