using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class SaveStatusRepository : ISaveStatusRepository
    {
        private readonly DatabaseContext _context;
        public SaveStatusRepository(DatabaseContext context) { _context = context; }

        public async Task<SaveStatus> Add(SaveStatus saveStatus)
        {
            SaveStatus s = new SaveStatus
            {
                Name = saveStatus.Name
            };
            _context.Add(s);
            await _context.SaveChangesAsync();

            return s;
        }

        public async Task<SaveStatus> Get(int id) => await _context.SaveStatuses.FindAsync(id);

        public async Task<IEnumerable<SaveStatus>> GetAll() => await _context.SaveStatuses.ToListAsync();

        public async Task<SaveStatus> Delete(int id)
        {
            var saveStatus = await _context.SaveStatuses.FindAsync(id);
            if (saveStatus != null)
            {
                _context.SaveStatuses.Remove(saveStatus);
                await _context.SaveChangesAsync();
            }

            return saveStatus;
        }

        public async Task<SaveStatus> Update(SaveStatus saveStatus)
        {
            SaveStatus s = await _context.SaveStatuses
                .Where(ch => ch.Id == saveStatus.Id)
                .FirstOrDefaultAsync();

            if (s != null)
            {
                s.Name = saveStatus.Name;               
                await _context.SaveChangesAsync();
            }
            return s;
        }
    }
}
