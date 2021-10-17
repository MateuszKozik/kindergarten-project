using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class PayoutRepository : IPayoutRepository
    {
        private readonly DatabaseContext _context;
        public PayoutRepository(DatabaseContext context) { _context = context; }

        public async Task<Payout> Add(Payout payout)
        {
            Payout p = new Payout
            {
                PayoutDate = payout.PayoutDate,
                Amount = payout.Amount,
                EmployeeId = payout.EmployeeId
            };
            _context.Add(p);
            await _context.SaveChangesAsync();

            return p;
        }

        public async Task<Payout> Get(int id) => await _context.Payouts.FindAsync(id);

        public async Task<IEnumerable<Payout>> GetAll() => await _context.Payouts.ToListAsync();

        public async Task<Payout> Delete(int id)
        {
            var payout = await _context.Payouts.FindAsync(id);
            if (payout != null)
            {
                _context.Payouts.Remove(payout);
                await _context.SaveChangesAsync();
            }

            return payout;
        }

        public async Task<Payout> Update(Payout payout)
        {
            Payout p = await _context.Payouts
                .Where(ch => ch.Id == payout.Id)
                .FirstOrDefaultAsync();

            if (p != null)
            {
                p.PayoutDate = payout.PayoutDate;
                p.Amount = payout.Amount;
                p.EmployeeId = payout.EmployeeId;
                await _context.SaveChangesAsync();
            }
            return p;
        }

        public async Task<Payout> GeneratePayouts()
        {
            Payout payout = null;
            foreach (var employee in await _context.Employees.ToListAsync())
            {
                Payout lastPayout = await _context.Payouts.Where(x => x.EmployeeId == employee.Id).OrderByDescending(x => x.PayoutDate).FirstOrDefaultAsync();
                if (lastPayout != null)
                {
                    if (lastPayout.PayoutDate.AddMonths(1) <= DateTime.Now)
                    {
                        payout = await Add(new Payout { Amount = employee.Salary, EmployeeId = employee.Id, PayoutDate = DateTime.Now });
                    }
                }
                else
                {
                    payout = await Add(new Payout { Amount = employee.Salary, EmployeeId = employee.Id, PayoutDate = DateTime.Now });
                }
            }
            return payout;
        }

        public async Task<List<Payout>> GetByEmployee(int employeeId) => await _context.Payouts.Where(x => x.EmployeeId == employeeId).ToListAsync();
    }
}
