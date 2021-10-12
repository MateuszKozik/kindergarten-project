using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("employees")]

    public class Employee
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("surname")]
        public string Surname { get; set; }

        [Column("phone_number")]
        public string PhoneNumber { get; set; }

        [Column("position")]
        public string Position { get; set; }

        [Column("salary")]
        public double Salary { get; set; }

        [Column("address_id")]
        public int AddressId { get; set; }
        public virtual Address Address { get; set; }

        [Column("user_id")]
        public int UserId { get; set; }
        public virtual User User { get; set; }

        public virtual ICollection<Payout> Payouts { get; set; }
        public virtual ICollection<Group> Groups { get; set; }
    }
}
