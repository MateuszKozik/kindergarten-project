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
        private readonly IParentChildRepository _parentChildRepository;
        public ChildRepository(DatabaseContext context, IParentChildRepository parentChildRepository)
        { 
            _context = context;
            _parentChildRepository = parentChildRepository;
        }

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

        public async Task<Child> GetByPesel(string pesel) => await _context.Children.Where(x => x.Pesel.Equals(pesel)).FirstOrDefaultAsync();

        public async Task<Child> AddByParent(Child child, int parentId)
        {
            Parent parent = await _context.Parents.Where(x => x.Id == parentId).FirstOrDefaultAsync();
            Child ch = await GetByPesel(child.Pesel);
            if(ch == null)
            {
                ch = await Add(child);
            }
            await _parentChildRepository.Add(new ParentChild { ParentId = parentId, ChildId = ch.Id });          
            return ch;
        }

        public async Task<IEnumerable<Child>> GetByParent(int parentId)
        {
            List<Child> children = new List<Child>();
            foreach (var item in await _context.ParentChildren.Where(x => x.ParentId == parentId).ToListAsync())
            {
                children.Add(await Get(item.ChildId));
            }
            return children;
        }

        public async Task<IEnumerable<Child>> GetByGroup(int groupId)
        {
            List<Child> children = new List<Child>();
            foreach (var item in await _context.Saves.Where(x => x.GroupId == groupId).ToListAsync())
            {
                Child child = _context.Children.Where(x => x.Id == item.ChildId && item.StatusId != 3).FirstOrDefault();
                if(child != null)
                {
                    children.Add(child);
                }
            }
            return children;
        }

        public async Task<bool> IsSaved(int id) => await _context.Saves.AnyAsync(x => x.ChildId == id && x.StatusId != 3);   
    }
}
