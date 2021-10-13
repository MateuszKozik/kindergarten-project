using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly DatabaseContext _context;
        public RoleRepository(DatabaseContext context) { _context = context; }

        public async Task<Role> Add(Role role)
        {
            Role r = new Role
            {
                Name = role.Name
            };
            _context.Add(r);
            await _context.SaveChangesAsync();

            return r;
        }

        public async Task<Role> Get(int id) => await _context.Roles.FindAsync(id);

        public async Task<IEnumerable<Role>> GetAll() => await _context.Roles.ToListAsync();

        public async Task<Role> Delete(int id)
        {
            var role = await _context.Roles.FindAsync(id);
            if (role != null)
            {
                _context.Roles.Remove(role);
                await _context.SaveChangesAsync();
            }

            return role;
        }

        public async Task<Role> Update(Role role)
        {
            Role r = await _context.Roles
                .Where(ch => ch.Id == role.Id)
                .FirstOrDefaultAsync();

            if (r != null)
            {
                r.Name = role.Name;
                await _context.SaveChangesAsync();
            }
            return r;
        }
    }
}
