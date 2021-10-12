using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> GetAll();
        Task<Employee> Get(int id);
        Task<Employee> Add(Employee employee);
        Task<Employee> Update(Employee employee);
        Task<Employee> Delete(int id);
    }
}
