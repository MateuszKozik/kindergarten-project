using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IPaymentRepository
    {
        Task<IEnumerable<Payment>> GetAll();
        Task<Payment> Get(int id);
        Task<Payment> Add(Payment payment);
        Task<Payment> Update(Payment payment);
        Task<Payment> Delete(int id);
        Task<Payment> PayBySave(int saveId);
        Task<List<Payment>> GeneratePayments();
    }
}
