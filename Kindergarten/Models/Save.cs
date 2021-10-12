using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("saves")]
    public class Save
    {
        [Column("id")]
        [Key]
        public int SaveId { get; set; }

        [Column("saving_date")]
        public DateTime SavingDate { get; set; }

        [Column("status_id")]
        public int StatusId { get; set; }
        public virtual SaveStatus SaveStatus {get;set;}

        [Column("child_id")]
        public int ChildId { get; set; }
        public virtual  Child Child { get; set; }

        [Column("group_id")]

        public int GroupId { get; set; }
        public virtual Group Group { get; set; }

        public ICollection<Payment> Payments { get; set; }
    }
}
