using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class PaymentStatusRepository : IPaymentStatusRepository
    {

        private readonly DatabaseContext _context;
        public PaymentStatusRepository(DatabaseContext context) { _context = context; }

        public async Task<PaymentStatus> Add(PaymentStatus paymentStatus)
        {
            PaymentStatus ps = new PaymentStatus
            {
                Name = paymentStatus.Name
            };
            _context.Add(ps);
            await _context.SaveChangesAsync();

            return ps;
        }

        public async Task<PaymentStatus> Get(int id) => await _context.PaymentStatuses.FindAsync(id);

        public async Task<IEnumerable<PaymentStatus>> GetAll() => await _context.PaymentStatuses.ToListAsync();

        public async Task<PaymentStatus> Delete(int id)
        {
            var paymentStatus = await _context.PaymentStatuses.FindAsync(id);
            if (paymentStatus != null)
            {
                _context.PaymentStatuses.Remove(paymentStatus);
                await _context.SaveChangesAsync();
            }

            return paymentStatus;
        }

        public async Task<PaymentStatus> Update(PaymentStatus paymentStatus)
        {
            PaymentStatus ps = await _context.PaymentStatuses
                .Where(ch => ch.Id == paymentStatus.Id)
                .FirstOrDefaultAsync();

            if (ps != null)
            {
                ps.Name = paymentStatus.Name;
                await _context.SaveChangesAsync();
            }
            return ps;
        }
    }
}
