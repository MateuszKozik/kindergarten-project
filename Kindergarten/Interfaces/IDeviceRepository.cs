using Kindergarten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Interfaces
{
    public interface IDeviceRepository
    {
        Task<IEnumerable<Device>> GetAll();
        Task<Device> Add(Device device);
    }
}
