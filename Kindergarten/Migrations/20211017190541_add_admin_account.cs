using Microsoft.EntityFrameworkCore.Migrations;

namespace Kindergarten.Migrations
{
    public partial class add_admin_account : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "id", "email", "enabled", "password", "role_id" },
                values: new object[] { 1, "admin@admin.pl", true, "$2a$11$f3lTPwhy2W62tcC4215nWeuL5vNS.gzXRhnJJznutAEiYaoUQ/RnO", 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "id",
                keyValue: 1);
        }
    }
}
