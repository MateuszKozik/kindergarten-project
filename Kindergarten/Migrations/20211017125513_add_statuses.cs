using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Kindergarten.Migrations
{
    public partial class add_statuses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "payout_date",
                table: "payments",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.InsertData(
                table: "payment_statuses",
                columns: new[] { "id", "Name" },
                values: new object[,]
                {
                    { 1, "paid" },
                    { 2, "unpaid" }
                });

            migrationBuilder.InsertData(
                table: "save_statuses",
                columns: new[] { "id", "name" },
                values: new object[,]
                {
                    { 1, "paid" },
                    { 2, "unpaid" },
                    { 3, "unsubscribed" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "payment_statuses",
                keyColumn: "id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "payment_statuses",
                keyColumn: "id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "save_statuses",
                keyColumn: "id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "save_statuses",
                keyColumn: "id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "save_statuses",
                keyColumn: "id",
                keyValue: 3);

            migrationBuilder.AlterColumn<DateTime>(
                name: "payout_date",
                table: "payments",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);
        }
    }
}
