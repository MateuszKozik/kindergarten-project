using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class DeviceRepository : IDeviceRepository
    {
        private readonly DatabaseContext _context;

        public DeviceRepository(DatabaseContext context) { _context = context; }

        public async Task<IEnumerable<Device>> GetAll() => await _context.Devices.ToListAsync();

        public async Task<Device> Add(Device device)
        {
            Device d = new Device
            {
                PushAuth = device.PushAuth,
                PushEndpoint = device.PushEndpoint,
                PushP256DH = device.PushP256DH
            };
            _context.Add(d);
            await _context.SaveChangesAsync();

            return d;
        }
    }
}
