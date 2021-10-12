using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IPaymentStatus
    {
        Task<IEnumerable<PaymentStatus>> GetAll();
        Task<PaymentStatus> Get(int id);
        Task<PaymentStatus> Add(PaymentStatus paymentStatus);
        Task<PaymentStatus> Update(PaymentStatus paymentStatus);
        Task<PaymentStatus> Delete(int id);
    }
}
