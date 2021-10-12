using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("payment_statuses")]
    public class PaymentStatus
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("Name")]
        public string Name { get; set; }

        public virtual ICollection<Payment> Payments { get; set; }
    }
}
