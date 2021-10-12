using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("save_statuses")]
    public class SaveStatus
    {
        [Column("id")]
        [Key]
        public int StatusId { get; set; }

        [Column("name")]
        public string Name { get; set; }

        public virtual ICollection<Save> Saves { get; set; }
    }
}
