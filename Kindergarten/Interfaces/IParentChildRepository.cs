using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IParentChildRepository
    {
        Task<IEnumerable<ParentChild>> GetAll();
        Task<ParentChild> Get(int id);
        Task<ParentChild> Add(ParentChild parentChild);
        Task<ParentChild> Update(ParentChild parentChild);
        Task<ParentChild> Delete(int id);
    }
}
