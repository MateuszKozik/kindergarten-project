using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IJwtAutenticationManager
    {
        string Authenticate(User user, Role role);
    }
}
