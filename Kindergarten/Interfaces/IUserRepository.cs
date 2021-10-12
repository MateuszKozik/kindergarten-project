using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAll();
        Task<User> Get(int id);
        Task<User> GetByEmail(string email);
        Task<User> Add(User user);
        Task<User> Update(User user);
        Task<User> Delete(int id);
    }
}
