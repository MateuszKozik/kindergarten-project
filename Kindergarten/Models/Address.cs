using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("adresses")]
    public class Address
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }
  
        [Column("street")]
        public string Street { get; set; }

        [Column("house_number")]
        public int HouseNumber { get; set; }

        [Column("flat_number")]
        public int FlatNumber { get; set; }
     
        [Column("post_code")]
        public string PostCode { get; set; }
      
        [Column("city")]
        public string City { get; set; }

        public virtual ICollection<Parent> Parents { get; set; }
        public virtual ICollection<Employee> Employees { get; set; }
    }
}
