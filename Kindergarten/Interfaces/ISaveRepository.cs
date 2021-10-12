using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface ISaveRepository
    {
        Task<IEnumerable<Save>> GetAll();
        Task<Save> Get(int id);
        Task<Save> Add(Save save);
        Task<Save> Update(Save save);
        Task<Save> Delete(int id);
    }
}
