using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class ParentRepository : IParentRepository
    {
        private readonly DatabaseContext _context;
        public ParentRepository(DatabaseContext context) { _context = context; }

        public async Task<Parent> Add(Parent parent)
        {
            Parent p = new Parent
            {
                Name = parent.Name,
                Surname = parent.Surname,
                PhoneNumber = parent.PhoneNumber,
                AddressId = parent.AddressId,
                UserId = parent.UserId
            };
            _context.Add(p);
            await _context.SaveChangesAsync();

            return p;
        }

        public async Task<Parent> Get(int id) => await _context.Parents.FindAsync(id);

        public async Task<IEnumerable<Parent>> GetAll() => await _context.Parents.ToListAsync();

        public async Task<Parent> Delete(int id)
        {
            var parent = await _context.Parents.FindAsync(id);
            if (parent != null)
            {
                _context.Parents.Remove(parent);
                await _context.SaveChangesAsync();
            }

            return parent;
        }

        public async Task<Parent> Update(Parent parent)
        {
            Parent p = await _context.Parents
                .Where(ch => ch.Id == parent.Id)
                .FirstOrDefaultAsync();

            if (p != null)
            {
                p.Name = parent.Name;
                p.Surname = parent.Surname;
                p.PhoneNumber = parent.PhoneNumber;
                p.AddressId = parent.AddressId;
                p.UserId = parent.UserId;
                await _context.SaveChangesAsync();
            }
            return p;
        }

        public async Task<Parent> GetByUser(int userId) =>  await _context.Parents.Where(x => x.UserId == userId).FirstOrDefaultAsync();
   
    }
}
