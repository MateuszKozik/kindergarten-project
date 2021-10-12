using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("parents")]

    public class Parent
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

        [Column("user_id")]
        public int UserId { get; set; }
        public virtual User User { get; set; }

        [Column("address_id")]
        public int AddressId { get; set; }
        public virtual Address Address { get; set; }

        public virtual ICollection<ParentChild> ParentChildren { get; set; }

    }
}
