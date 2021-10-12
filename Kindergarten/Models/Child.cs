using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("children")]
    public class Child
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("pesel")]
        public string Pesel { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("surname")]
        public string Surname { get; set; }

        [Column("special_requirements")]
        public string SpecialRequirements { get; set; }

        public virtual ICollection<ParentChild> ParentChildren { get; set; }

        public virtual ICollection<Save> Saves { get; set; }
    }
}
