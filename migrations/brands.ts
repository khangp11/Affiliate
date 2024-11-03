import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("brands", (table) => {
    table.increments("id").primary();
    table.string("brandId").notNullable();
    table.string("name").notNullable();
    table.json("image").notNullable();
    table.string("slug").notNullable();
    table.boolean("topBrand").defaultTo(false);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("brands");
}
