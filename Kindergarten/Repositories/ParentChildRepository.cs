using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class ParentChildRepository : IParentChildRepository
    {
        private readonly DatabaseContext _context;
        public ParentChildRepository(DatabaseContext context) { _context = context; }

        public async Task<ParentChild> Add(ParentChild parentChild)
        {
            ParentChild pc = new ParentChild
            {
                ChildId = parentChild.ChildId,
                ParentId = parentChild.ParentId
            };
            _context.Add(pc);
            await _context.SaveChangesAsync();

            return pc;
        }

        public async Task<ParentChild> Get(int id) => await _context.ParentChildren.FindAsync(id);

        public async Task<IEnumerable<ParentChild>> GetAll() => await _context.ParentChildren.ToListAsync();

        public async Task<ParentChild> Delete(int id)
        {
            var parentChild = await _context.ParentChildren.FindAsync(id);
            if (parentChild != null)
            {
                _context.ParentChildren.Remove(parentChild);
                await _context.SaveChangesAsync();
            }

            return parentChild;
        }  
    }
}
