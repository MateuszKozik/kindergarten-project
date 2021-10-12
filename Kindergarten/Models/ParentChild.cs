using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("parents_children")]
    public class ParentChild
    {
        [Column("parent_id")]
        public int ParentId { get; set; }
        public virtual Parent Parent { get; set; }

        [Column("child_id")]
        public int ChildId { get; set; }
        public virtual Child Child { get; set; }
    }
}
