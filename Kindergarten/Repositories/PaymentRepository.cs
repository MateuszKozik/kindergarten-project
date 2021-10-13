using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class PaymentRepository : IPaymentRepository
    {
        private readonly DatabaseContext _context;
        public PaymentRepository(DatabaseContext context) { _context = context; }

        public async Task<Payment> Add(Payment payment)
        {
            Payment p = new Payment
            {
                Amount = payment.Amount,
                PaymentDate = payment.PaymentDate,
                PayoutDate = payment.PayoutDate,
                StatusId = payment.StatusId,
                SaveId = payment.StatusId
            };
            _context.Add(p);
            await _context.SaveChangesAsync();

            return p;
        }

        public async Task<Payment> Get(int id) => await _context.Payments.FindAsync(id);

        public async Task<IEnumerable<Payment>> GetAll() => await _context.Payments.ToListAsync();

        public async Task<Payment> Delete(int id)
        {
            var payment = await _context.Payments.FindAsync(id);
            if (payment != null)
            {
                _context.Payments.Remove(payment);
                await _context.SaveChangesAsync();
            }

            return payment;
        }

        public async Task<Payment> Update(Payment payment)
        {
            Payment p = await _context.Payments
                .Where(ch => ch.Id == payment.Id)
                .FirstOrDefaultAsync();

            if (p != null)
            {
                p.Amount = payment.Amount;
                p.PaymentDate = payment.PaymentDate;
                p.PayoutDate = payment.PayoutDate;
                p.StatusId = payment.StatusId;
                p.SaveId = payment.StatusId;
                await _context.SaveChangesAsync();
            }
            return p;
        }
    }
}
