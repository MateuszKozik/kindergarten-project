using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IParentRepository
    {
        Task<IEnumerable<Parent>> GetAll();
        Task<Parent> Get(int id);
        Task<Parent> Add(Parent parent);
        Task<Parent> Update(Parent parent);
        Task<Parent> Delete(int id);
        Task<Parent> GetByUser(int userId);
    }
}
