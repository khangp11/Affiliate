import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("coupons", (table) => {
    table.increments("id").primary();
    table.string("code").unique().notNullable();
    table.integer("amount").notNullable();
    table.date("active").notNullable();
    table.date("expired").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("coupons");
}
