import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("shipping_charges", (table) => {
    table.increments("id").primary();
    table.json("area").notNullable();
    table.float("internationalCost").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("shipping_charges");
}
