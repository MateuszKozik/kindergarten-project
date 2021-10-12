using Kindergarten.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
            Database.Migrate();
        }

        public DbSet<Address> Addresses { get; set; }
        public DbSet<Child> Children { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Parent> Parents { get; set; }
        public DbSet<ParentChild> ParentChildren { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<PaymentStatus> PaymentStatuses { get; set; }
        public DbSet<Payout> Payouts { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Save> Saves { get; set; }
        public DbSet<SaveStatus> SaveStatuses { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // One to many Employee - Address
            modelBuilder.Entity<Employee>()
                .HasOne<Address>(e => e.Address)
                .WithMany(a => a.Employees)
                .HasForeignKey(e => e.AddressId)
                .OnDelete(DeleteBehavior.Restrict);

            // One to many Parent - Address
            modelBuilder.Entity<Parent>()
                .HasOne<Address>(p => p.Address)
                .WithMany(a => a.Parents)
                .HasForeignKey(p => p.AddressId)
                .OnDelete(DeleteBehavior.Restrict);

            // One to one Employee - User
            modelBuilder.Entity<User>()
                .HasOne<Employee>(e => e.Employee)
                .WithOne(u => u.User)
                .HasForeignKey<Employee>(u => u.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // One to one Parent - User
            modelBuilder.Entity<User>()
                .HasOne<Parent>(p => p.Parent)
                .WithOne(u => u.User)
                .HasForeignKey<Parent>(u => u.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // One to many Role - User
            modelBuilder.Entity<User>()
                 .HasOne<Role>(r => r.Role)
                 .WithMany(r => r.Users)
                 .HasForeignKey(r => r.RoleId)
                 .OnDelete(DeleteBehavior.Restrict);

            // One to many Payout - Employee
            modelBuilder.Entity<Payout>()
                .HasOne<Employee>(p => p.Employee)
                .WithMany(e => e.Payouts)
                .HasForeignKey(e => e.EmployeeId)
                .OnDelete(DeleteBehavior.Restrict);

            // Many to many ParentChild
            modelBuilder.Entity<ParentChild>()
                .HasKey(pch => new { pch.ChildId, pch.ParentId });
            modelBuilder.Entity<ParentChild>()
                .HasOne(pch => pch.Parent)
                .WithMany(p => p.ParentChildren)
                .HasForeignKey(pch => pch.ParentId);
            modelBuilder.Entity<ParentChild>()
                .HasOne(pch => pch.Child)
                .WithMany(c => c.ParentChildren)
                .HasForeignKey(pch => pch.ChildId);

            // One to many Child - Save
            modelBuilder.Entity<Save>()
                .HasOne<Child>(c => c.Child)
                .WithMany(s => s.Saves)
                .HasForeignKey(c => c.ChildId)
                .OnDelete(DeleteBehavior.Restrict);

            // One to many SaveStatus - Save
            modelBuilder.Entity<Save>()
                .HasOne<SaveStatus>(s => s.SaveStatus)
                .WithMany(s => s.Saves)
                .HasForeignKey(s => s.StatusId)
                .OnDelete(DeleteBehavior.Restrict);

            // One to many Group - Save
            modelBuilder.Entity<Save>()
                .HasOne<Group>(g => g.Group)
                .WithMany(s => s.Saves)
                .HasForeignKey(g => g.GroupId)
                .OnDelete(DeleteBehavior.Restrict);

            // One to many Employee - Group
            modelBuilder.Entity<Group>()
                .HasOne<Employee>(e => e.Employee)
                .WithMany(g => g.Groups)
                .HasForeignKey(e => e.EmployeeId)
                .OnDelete(DeleteBehavior.Restrict);

            // One to many PaymentStatus - Payment
            modelBuilder.Entity<Payment>()
                .HasOne<PaymentStatus>(ps => ps.PaymentStatus)
                .WithMany(p => p.Payments)
                .HasForeignKey(ps => ps.StatusId)
                .OnDelete(DeleteBehavior.Restrict);

            // One to many Save - Payment
            modelBuilder.Entity<Payment>()
                .HasOne<Save>(s => s.Save)
                .WithMany(p => p.Payments)
                .HasForeignKey(s => s.SaveId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
