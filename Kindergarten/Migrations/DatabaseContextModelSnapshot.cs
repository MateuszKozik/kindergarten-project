﻿// <auto-generated />
using System;
using Kindergarten.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Kindergarten.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Kindergarten.Models.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("city");

                    b.Property<int>("FlatNumber")
                        .HasColumnType("int")
                        .HasColumnName("flat_number");

                    b.Property<int>("HouseNumber")
                        .HasColumnType("int")
                        .HasColumnName("house_number");

                    b.Property<string>("PostCode")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("post_code");

                    b.Property<string>("Street")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("street");

                    b.HasKey("Id");

                    b.ToTable("adresses");
                });

            modelBuilder.Entity("Kindergarten.Models.Child", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("name");

                    b.Property<string>("Pesel")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("pesel");

                    b.Property<string>("SpecialRequirements")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("special_requirements");

                    b.Property<string>("Surname")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("surname");

                    b.HasKey("Id");

                    b.ToTable("children");
                });

            modelBuilder.Entity("Kindergarten.Models.Device", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("PushAuth")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("push_auth");

                    b.Property<string>("PushEndpoint")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("push_endpoint");

                    b.Property<string>("PushP256DH")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("push_p256dh");

                    b.HasKey("Id");

                    b.ToTable("devices");
                });

            modelBuilder.Entity("Kindergarten.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AddressId")
                        .HasColumnType("int")
                        .HasColumnName("address_id");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("name");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("phone_number");

                    b.Property<string>("Position")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("position");

                    b.Property<double>("Salary")
                        .HasColumnType("float")
                        .HasColumnName("salary");

                    b.Property<string>("Surname")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("surname");

                    b.Property<int>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("user_id");

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("employees");
                });

            modelBuilder.Entity("Kindergarten.Models.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("EmployeeId")
                        .HasColumnType("int")
                        .HasColumnName("employee_id");

                    b.Property<int>("FreePlaces")
                        .HasColumnType("int")
                        .HasColumnName("free_places");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.ToTable("groups");
                });

            modelBuilder.Entity("Kindergarten.Models.Parent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AddressId")
                        .HasColumnType("int")
                        .HasColumnName("address_id");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("name");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("phone_number");

                    b.Property<string>("Surname")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("surname");

                    b.Property<int>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("user_id");

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("parents");
                });

            modelBuilder.Entity("Kindergarten.Models.ParentChild", b =>
                {
                    b.Property<int>("ChildId")
                        .HasColumnType("int")
                        .HasColumnName("child_id");

                    b.Property<int>("ParentId")
                        .HasColumnType("int")
                        .HasColumnName("parent_id");

                    b.HasKey("ChildId", "ParentId");

                    b.HasIndex("ParentId");

                    b.ToTable("parents_children");
                });

            modelBuilder.Entity("Kindergarten.Models.Payment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Amount")
                        .HasColumnType("int")
                        .HasColumnName("amount");

                    b.Property<DateTime>("PaymentDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("payment_date");

                    b.Property<DateTime?>("PayoutDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("payout_date");

                    b.Property<int>("SaveId")
                        .HasColumnType("int")
                        .HasColumnName("save_id");

                    b.Property<int>("StatusId")
                        .HasColumnType("int")
                        .HasColumnName("status_id");

                    b.HasKey("Id");

                    b.HasIndex("SaveId");

                    b.HasIndex("StatusId");

                    b.ToTable("payments");
                });

            modelBuilder.Entity("Kindergarten.Models.PaymentStatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Name");

                    b.HasKey("Id");

                    b.ToTable("payment_statuses");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "paid"
                        },
                        new
                        {
                            Id = 2,
                            Name = "unpaid"
                        },
                        new
                        {
                            Id = 3,
                            Name = "overdue"
                        });
                });

            modelBuilder.Entity("Kindergarten.Models.Payout", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Amount")
                        .HasColumnType("float")
                        .HasColumnName("amount");

                    b.Property<int>("EmployeeId")
                        .HasColumnType("int")
                        .HasColumnName("employee_id");

                    b.Property<DateTime>("PayoutDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("payout_date");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.ToTable("payouts");
                });

            modelBuilder.Entity("Kindergarten.Models.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.ToTable("roles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "admin"
                        },
                        new
                        {
                            Id = 2,
                            Name = "employee"
                        },
                        new
                        {
                            Id = 3,
                            Name = "parent"
                        });
                });

            modelBuilder.Entity("Kindergarten.Models.Save", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ChildId")
                        .HasColumnType("int")
                        .HasColumnName("child_id");

                    b.Property<int>("GroupId")
                        .HasColumnType("int")
                        .HasColumnName("group_id");

                    b.Property<DateTime>("SavingDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("saving_date");

                    b.Property<int>("StatusId")
                        .HasColumnType("int")
                        .HasColumnName("status_id");

                    b.HasKey("Id");

                    b.HasIndex("ChildId");

                    b.HasIndex("GroupId");

                    b.HasIndex("StatusId");

                    b.ToTable("saves");
                });

            modelBuilder.Entity("Kindergarten.Models.SaveStatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.ToTable("save_statuses");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "paid"
                        },
                        new
                        {
                            Id = 2,
                            Name = "unpaid"
                        },
                        new
                        {
                            Id = 3,
                            Name = "unsubscribed"
                        });
                });

            modelBuilder.Entity("Kindergarten.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("email");

                    b.Property<bool>("Enabled")
                        .HasColumnType("bit")
                        .HasColumnName("enabled");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("password");

                    b.Property<int>("RoleId")
                        .HasColumnType("int")
                        .HasColumnName("role_id");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "admin@admin.pl",
                            Enabled = true,
                            Password = "$2a$11$f3lTPwhy2W62tcC4215nWeuL5vNS.gzXRhnJJznutAEiYaoUQ/RnO",
                            RoleId = 1
                        });
                });

            modelBuilder.Entity("Kindergarten.Models.Employee", b =>
                {
                    b.HasOne("Kindergarten.Models.Address", "Address")
                        .WithMany("Employees")
                        .HasForeignKey("AddressId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Kindergarten.Models.User", "User")
                        .WithOne("Employee")
                        .HasForeignKey("Kindergarten.Models.Employee", "UserId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Address");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Kindergarten.Models.Group", b =>
                {
                    b.HasOne("Kindergarten.Models.Employee", "Employee")
                        .WithMany("Groups")
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Employee");
                });

            modelBuilder.Entity("Kindergarten.Models.Parent", b =>
                {
                    b.HasOne("Kindergarten.Models.Address", "Address")
                        .WithMany("Parents")
                        .HasForeignKey("AddressId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Kindergarten.Models.User", "User")
                        .WithOne("Parent")
                        .HasForeignKey("Kindergarten.Models.Parent", "UserId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Address");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Kindergarten.Models.ParentChild", b =>
                {
                    b.HasOne("Kindergarten.Models.Child", "Child")
                        .WithMany("ParentChildren")
                        .HasForeignKey("ChildId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Kindergarten.Models.Parent", "Parent")
                        .WithMany("ParentChildren")
                        .HasForeignKey("ParentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Child");

                    b.Navigation("Parent");
                });

            modelBuilder.Entity("Kindergarten.Models.Payment", b =>
                {
                    b.HasOne("Kindergarten.Models.Save", "Save")
                        .WithMany("Payments")
                        .HasForeignKey("SaveId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Kindergarten.Models.PaymentStatus", "PaymentStatus")
                        .WithMany("Payments")
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("PaymentStatus");

                    b.Navigation("Save");
                });

            modelBuilder.Entity("Kindergarten.Models.Payout", b =>
                {
                    b.HasOne("Kindergarten.Models.Employee", "Employee")
                        .WithMany("Payouts")
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Employee");
                });

            modelBuilder.Entity("Kindergarten.Models.Save", b =>
                {
                    b.HasOne("Kindergarten.Models.Child", "Child")
                        .WithMany("Saves")
                        .HasForeignKey("ChildId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Kindergarten.Models.Group", "Group")
                        .WithMany("Saves")
                        .HasForeignKey("GroupId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Kindergarten.Models.SaveStatus", "SaveStatus")
                        .WithMany("Saves")
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Child");

                    b.Navigation("Group");

                    b.Navigation("SaveStatus");
                });

            modelBuilder.Entity("Kindergarten.Models.User", b =>
                {
                    b.HasOne("Kindergarten.Models.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Role");
                });

            modelBuilder.Entity("Kindergarten.Models.Address", b =>
                {
                    b.Navigation("Employees");

                    b.Navigation("Parents");
                });

            modelBuilder.Entity("Kindergarten.Models.Child", b =>
                {
                    b.Navigation("ParentChildren");

                    b.Navigation("Saves");
                });

            modelBuilder.Entity("Kindergarten.Models.Employee", b =>
                {
                    b.Navigation("Groups");

                    b.Navigation("Payouts");
                });

            modelBuilder.Entity("Kindergarten.Models.Group", b =>
                {
                    b.Navigation("Saves");
                });

            modelBuilder.Entity("Kindergarten.Models.Parent", b =>
                {
                    b.Navigation("ParentChildren");
                });

            modelBuilder.Entity("Kindergarten.Models.PaymentStatus", b =>
                {
                    b.Navigation("Payments");
                });

            modelBuilder.Entity("Kindergarten.Models.Role", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("Kindergarten.Models.Save", b =>
                {
                    b.Navigation("Payments");
                });

            modelBuilder.Entity("Kindergarten.Models.SaveStatus", b =>
                {
                    b.Navigation("Saves");
                });

            modelBuilder.Entity("Kindergarten.Models.User", b =>
                {
                    b.Navigation("Employee");

                    b.Navigation("Parent");
                });
#pragma warning restore 612, 618
        }
    }
}
