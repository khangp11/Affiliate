import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("settings", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("title").notNullable();
    table.string("address").notNullable();
    table.string("shortAddress").notNullable();
    table.string("email").notNullable();
    table.string("description").notNullable();
    table.string("phoneHeader").notNullable();
    table.string("phoneFooter").notNullable();
    table.string("copyright").notNullable();
    table.json("logo").notNullable();
    table.json("favicon").notNullable();
    table.json("gatewayImage").notNullable();
    table.string("headerCustomScript").notNullable();
    table.string("footerCustomScript").notNullable();
    table.string("language").defaultTo("en").notNullable();
    table.json("footerBanner").notNullable();
    table.json("seo").notNullable();
    table.json("social").notNullable();
    table.json("currency").notNullable();
    table.json("color").notNullable();
    table.json("script").notNullable();
    table.json("paymentGateway").notNullable();
    table.json("login").notNullable();
    table.json("security").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("settings");
}
