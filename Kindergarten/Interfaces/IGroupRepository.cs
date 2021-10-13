using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IGroupRepository
    {
        Task<IEnumerable<Group>> GetAll();
        Task<Group> Get(int id);
        Task<Group> Add(Group group);
        Task<Group> Update(Group group);
        Task<Group> Delete(int id);
    }
}
