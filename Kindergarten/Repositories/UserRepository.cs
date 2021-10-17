using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DatabaseContext _context;
        public UserRepository(DatabaseContext context) { _context = context; }

        public async Task<User> Add(User user)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(user.Password);

            User u = new User
            {
                Email = user.Email,
                Password = passwordHash,
                Enabled = user.Enabled,
                RoleId = user.RoleId,
                Employee = user.Employee,
                Parent = user.Parent
            };
            _context.Add(u);
            await _context.SaveChangesAsync();

            return u;
        }

        public async Task<User> GetByEmail(string email)
        {
            var user = await _context.Users
                .Where(s => s.Email == email)
                .FirstOrDefaultAsync();
            return user;
        }
        public async Task<User> Get(int id) => await _context.Users.FindAsync(id);

        public async Task<IEnumerable<User>> GetAll() => await _context.Users.ToListAsync();

        public async Task<User> Delete(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }

            return user;
        }

        public async Task<User> Update(User user)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(user.Password);

            User u = await _context.Users
                .Where(ch => ch.Id == user.Id)
                .FirstOrDefaultAsync();

            if (u != null)
            {
                u.Email = user.Email;
                u.Password = passwordHash;
                u.Enabled = user.Enabled;
                u.RoleId = user.RoleId;          
                await _context.SaveChangesAsync();
            }
            return u;
        }

        public async Task<User> RegisterEmployee(User user)
        {          
            Role role = await _context.Roles.Where(x => x.Name.Equals("employee")).FirstOrDefaultAsync();
            user.Enabled = true;
            user.RoleId = role.Id;
            User us = await Add(user);
            return us;
        }

        public async Task<User> RegisterParent(User user)
        {
            Role role = await _context.Roles.Where(x => x.Name.Equals("parent")).FirstOrDefaultAsync();
            user.Enabled = true;
            user.RoleId = role.Id;
            User us = await Add(user);
            return us;
        }
    }
}
