using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IAddressRepository
    {
        Task<IEnumerable<Address>> GetAll();
        Task<Address> Get(int id);
        Task<Address> Add(Address address);
        Task<Address> Update(Address address);
        Task<Address> Delete(int id);
    }
}
