using Microsoft.EntityFrameworkCore.Migrations;

namespace Kindergarten.Migrations
{
    public partial class add_payment_status : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "payment_statuses",
                columns: new[] { "id", "Name" },
                values: new object[] { 3, "overdue" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "payment_statuses",
                keyColumn: "id",
                keyValue: 3);
        }
    }
}
