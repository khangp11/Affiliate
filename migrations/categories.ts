import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("categories", (table) => {
    table.increments("id").primary();
    table.string("categoryId").notNullable();
    table.string("name").notNullable();
    table.json("icon").notNullable();
    table.string("slug").notNullable();
    table.json("subCategories").notNullable();
    table.boolean("topCategory").defaultTo(false);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("categories");
}
