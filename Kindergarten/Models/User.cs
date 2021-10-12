using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("users")]
    public class User
    {
       
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("email")]
        public string Email { get; set; }
     
        [Column("password")]
        public string Password { get; set; }
        
        [Column("enabled")]
        public bool Enabled { get; set; }

        [Column("role_id")]
        public int RoleId { get; set; }
        public virtual Role Role { get; set; }

        public virtual Employee Employee { get; set; }

        public virtual Parent Parent { get; set; }
    }
}
