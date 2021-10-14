using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class ChildRepository : IChildRepository
    {
        private readonly DatabaseContext _context;
        public ChildRepository(DatabaseContext context) { _context = context; }

        public async Task<Child> Add(Child child)
        {
            Child ch = new Child
            {
                Name = child.Name,
                Surname = child.Surname,
                Pesel = child.Pesel,
                SpecialRequirements = child.SpecialRequirements
            };
            _context.Add(ch);
            await _context.SaveChangesAsync();

            return ch;
        }

        public async Task<Child> Get(int id) => await _context.Children.FindAsync(id);

        public async Task<IEnumerable<Child>> GetAll() => await _context.Children.ToListAsync();

        public async Task<Child> Delete(int id)
        {
            var child = await _context.Children.FindAsync(id);
            if(child != null)
            {
                _context.Children.Remove(child);
                await _context.SaveChangesAsync();
            }

            return child;
        }

        public async Task<Child> Update(Child child)
        {
            Child ch = await _context.Children
                .Where(ch => ch.Id == child.Id)
                .FirstOrDefaultAsync();

            if(ch != null)
            {
                ch.Name = child.Name;
                ch.Surname = child.Surname;
                ch.Pesel = child.Pesel;
                ch.SpecialRequirements = child.SpecialRequirements;
                await _context.SaveChangesAsync();
            }
            return ch;
        }
    }
}
