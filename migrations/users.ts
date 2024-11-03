import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("phone");
    table.string("house");
    table.string("city");
    table.string("state");
    table.string("zipCode");
    table.string("country");
    table.string("image");
    table.string("hash").notNullable();
    table.string("salt").notNullable();
    table.boolean("isAdmin").defaultTo(false);
    table.json("isStaff");
    table.date("emailVerified");
    table.timestamps(true, true);
    table.string("resetPasswordToken");
    table.date("resetPasswordExpires");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}
