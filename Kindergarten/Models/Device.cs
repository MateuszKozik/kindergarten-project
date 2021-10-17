using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    [Table("devices")]
    public class Device
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("push_endpoint")]
        public string PushEndpoint { get; set; }

        [Column("push_p256dh")]
        public string PushP256DH { get; set; }

        [Column("push_auth")]
        public string PushAuth { get; set; }

    }
}
