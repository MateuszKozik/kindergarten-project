using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IChildRepository
    {
        Task<IEnumerable<Child>> GetAll();
        Task<Child> Get(int id);
        Task<Child> Add(Child child);
        Task<Child> Update(Child child);
        Task<Child> Delete(int id);
    }
}
