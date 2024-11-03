import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("attributes", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.json("values").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("attributes");
}
