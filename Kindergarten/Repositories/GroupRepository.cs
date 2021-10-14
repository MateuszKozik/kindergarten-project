using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class GroupRepository : IGroupRepository
    {
        private readonly DatabaseContext _context;
        public GroupRepository(DatabaseContext context) { _context = context; }

        public async Task<Group> Add(Group group)
        {
            Group g = new Group
            {
                Name = group.Name,
                FreePlaces = group.FreePlaces,
                EmployeeId = group.EmployeeId
            };
            _context.Add(g);
            await _context.SaveChangesAsync();

            return g;
        }

        public async Task<Group> Get(int id) => await _context.Groups.FindAsync(id);

        public async Task<IEnumerable<Group>> GetAll() => await _context.Groups.ToListAsync();

        public async Task<Group> Delete(int id)
        {
            var group = await _context.Groups.FindAsync(id);
            if (group != null)
            {
                _context.Groups.Remove(group);
                await _context.SaveChangesAsync();
            }

            return group;
        }

        public async Task<Group> Update(Group group)
        {
            Group g = await _context.Groups
                .Where(ch => ch.Id == group.Id)
                .FirstOrDefaultAsync();

            if (g != null)
            {
                g.Name = group.Name;
                g.FreePlaces = group.FreePlaces;
                g.EmployeeId = group.EmployeeId;
                await _context.SaveChangesAsync();
            }
            return g;
        }
    }
}
