using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("payments")]
    public class Payment
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("amount")]
        public int Amount { get; set; }

        [Column("payment_date")]
        public DateTime PaymentDate { get; set; }

        [Column("payout_date")]
        public DateTime? PayoutDate { get; set; }

        [Column("status_id")]
        public int StatusId { get; set; }
        public virtual PaymentStatus PaymentStatus {get;set;}

        [Column("save_id")]
        public int SaveId { get; set; }
        public virtual Save Save { get; set; }
    }
}
