using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("groups")]
    public class Group
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("free_places")]
        public int FreePlaces { get; set; }

        [Column("employee_id")]
        public int EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }

        public virtual ICollection<Save> Saves { get; set; }
    }
}
