using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Models
{
    public class PushMessage
    {
        /// <summary>
        /// Push title
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Push message body
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// Link to redirect where user click on notification click
        /// </summary>
        public string Link { get; set; }

        /// <summary>
        /// Push icon
        /// </summary>
        public string Icon { get; set; }
    }

}
