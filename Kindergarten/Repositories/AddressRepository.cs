using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class AddressRepository : IAddressRepository
    {
        private readonly DatabaseContext _context;
        public AddressRepository(DatabaseContext context) { _context = context; }

        public async Task<Address> Add(Address address)
        {
            Address addr = new Address();

            addr.Street = address.Street;
            addr.HouseNumber = address.HouseNumber;
            addr.FlatNumber = address.FlatNumber;
            addr.PostCode = address.PostCode;
            addr.City = address.City;
            _context.Add(addr);
            await _context.SaveChangesAsync();

            return addr;
        }

        public async Task<Address> Get(int id)
        {
            var address = await _context.Addresses.FindAsync(id);
            return address;
        }

        public async Task<IEnumerable<Address>> GetAll()
        {
            var address = await _context.Addresses
                .Include(x => x.Employees)
                .ToListAsync();
            return address;
        }

        public async Task<Address> Delete(int id)
        {
            var address = await _context.Addresses.FindAsync(id);
            if (address != null)
            {
                _context.Addresses.Remove(address);
                await _context.SaveChangesAsync();
            }

            return address;
        }
        public async Task<Address> Update(Address address)
        {
            Address addr = null;


            addr = await _context.Addresses
                .Where(s => s.Id == address.Id)
                .FirstOrDefaultAsync<Address>();

            if (addr != null)
            {
                addr.Street = address.Street;
                addr.HouseNumber = address.HouseNumber;
                addr.FlatNumber = address.FlatNumber;
                addr.PostCode = address.PostCode;
                addr.City = address.City;

                await _context.SaveChangesAsync();
            }
            return addr;
        }

    }
}
