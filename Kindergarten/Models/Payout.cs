using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("payouts")]
    public class Payout
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("payout_date")]
        public DateTime PayoutDate { get; set; }

        [Column("amount")]
        public double Amount { get; set; }

        [Column("employee_id")]
        public int EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
