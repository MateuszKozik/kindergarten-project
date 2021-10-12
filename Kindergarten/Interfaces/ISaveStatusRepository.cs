using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface ISaveStatusRepository
    {
        Task<IEnumerable<SaveStatus>> GetAll();
        Task<SaveStatus> Get(int id);
        Task<SaveStatus> Add(SaveStatus saveStatus);
        Task<SaveStatus> Update(SaveStatus saveStatus);
        Task<SaveStatus> Delete(int id);
    }
}
