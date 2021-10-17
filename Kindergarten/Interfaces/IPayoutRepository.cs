using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IPayoutRepository
    {
        Task<IEnumerable<Payout>> GetAll();
        Task<Payout> Get(int id);
        Task<Payout> Add(Payout payout);
        Task<Payout> Update(Payout payout);
        Task<Payout> Delete(int id);
        Task<List<Payout>> GetByEmployee(int employeeId);
        Task<Payout> GeneratePayouts();
    }
}
