using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IRoleRepository
    {
        Task<IEnumerable<Role>> GetAll();
        Task<Role> Get(int id);
        Task<Role> Add(Role role);
        Task<Role> Update(Role role);
        Task<Role> Delete(int id);
    }
}
