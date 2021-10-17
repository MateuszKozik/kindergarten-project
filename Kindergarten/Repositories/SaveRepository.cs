using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class SaveRepository : ISaveRepository
    {
        private readonly DatabaseContext _context;
        public SaveRepository(DatabaseContext context) 
        { 
            _context = context;
        }

        public async Task<Save> Add(Save save)
        {
            Save s = new Save
            {
                SavingDate = DateTime.Now,
                StatusId = 2,
                ChildId = save.ChildId,
                GroupId = save.GroupId
            };
            _context.Add(s);
            await _context.SaveChangesAsync();

            _context.Add(new Payment { PaymentDate = DateTime.Now.AddDays(7),Amount = 400, PayoutDate = null, StatusId = 2, SaveId = s.Id });
            await _context.SaveChangesAsync();

            Group group = await _context.Groups.Where(x => x.Id == save.GroupId).FirstOrDefaultAsync();
            group.FreePlaces--;
            await _context.SaveChangesAsync();
            return s;
        }

        public async Task<Save> Get(int id) => await _context.Saves.FindAsync(id);

        public async Task<IEnumerable<Save>> GetAll() => await _context.Saves.ToListAsync();

        public async Task<Save> Delete(int id)
        {
            var save = await _context.Saves.FindAsync(id);
            if (save != null)
            {
                _context.Saves.Remove(save);
                await _context.SaveChangesAsync();
            }

            return save;
        }

        public async Task<Save> Update(Save save)
        {
            Save s = await _context.Saves
                .Where(ch => ch.Id == save.Id)
                .FirstOrDefaultAsync();

            if (s != null)
            {
                s.SavingDate = save.SavingDate;
                s.StatusId = save.StatusId;
                s.ChildId = save.ChildId;
                s.GroupId = save.GroupId;
                await _context.SaveChangesAsync();
            }
            return s;
        }

        public async Task<Save> Unsubscribe(int id)
        {
            Save save = await Get(id);
            if(save != null)
            {
                save.StatusId = 3;
              

                Group group = await _context.Groups.Where(x => x.Id == save.GroupId).FirstOrDefaultAsync();
                group.FreePlaces++;
                await _context.SaveChangesAsync();
                return await Update(save);
            }
            return save;
        }
    }
}
