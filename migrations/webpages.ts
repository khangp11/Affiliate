import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("webpages", (table) => {
    table.increments("id").primary();
    table.json("homePage").notNullable();
    table.json("aboutPage").notNullable();
    table.json("privacyPage").notNullable();
    table.json("termsPage").notNullable();
    table.json("returnPolicyPage").notNullable();
    table.json("faqPage").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("webpages");
}
