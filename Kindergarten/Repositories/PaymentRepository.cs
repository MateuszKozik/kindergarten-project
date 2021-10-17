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
        private readonly ISaveRepository _saveRepository;
        public PaymentRepository(DatabaseContext context, ISaveRepository saveRepository)
        {
            _context = context;
            _saveRepository = saveRepository;
        }

        public async Task<Payment> Add(Payment payment)
        {
            Payment p = new Payment
            {
                Amount = payment.Amount,
                PaymentDate = payment.PaymentDate,
                PayoutDate = payment.PayoutDate,
                StatusId = payment.StatusId,
                SaveId = payment.SaveId
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
                p.SaveId = payment.SaveId;
                await _context.SaveChangesAsync();
            }
            return p;
        }

        public async Task<Payment> PayBySave(int saveId)
        {
            Payment payment = await _context.Payments.Where(x => x.SaveId == saveId && x.StatusId == 2).FirstOrDefaultAsync();
            if (payment != null)
            {
                payment.StatusId = 1;
                payment.PayoutDate = DateTime.Now;
                payment = await Update(payment);

                Save save = await _saveRepository.Get(saveId);
                save.StatusId = 1;
                await _saveRepository.Update(save);
            }
            return payment;
        }

        public async Task<List<Payment>> GeneratePayments()
        {
            List<Payment> payments = new List<Payment>();
            foreach (var save in await _context.Saves.Where(x => x.StatusId != 3).ToListAsync())
            {
                Payment payment = await _context.Payments.Where(x => x.SaveId == save.Id).OrderByDescending(x => x.PaymentDate).FirstOrDefaultAsync();
                if (payment != null)
                {
                    if (payment.PaymentDate.AddMonths(1) <= DateTime.Now)
                    {
                        Payment newPayment = null;
                        if (save.StatusId == 2)
                        {
                            payment.StatusId = 3;
                            await Update(payment);
                            newPayment = await Add(new Payment { PaymentDate = DateTime.Now.AddDays(7), Amount = payment.Amount + 400, PayoutDate = null, StatusId = 2, SaveId = save.Id });
                        }
                        else
                        {
                            newPayment = await Add(new Payment { PaymentDate = DateTime.Now.AddDays(7), Amount = 400, PayoutDate = null, StatusId = 2, SaveId = save.Id });
                        }
                        save.StatusId = 2;
                        await _context.SaveChangesAsync();
                        if (newPayment != null) { payments.Add(newPayment); }
                    }
                }
            }
            return payments;
        }
    }
}
