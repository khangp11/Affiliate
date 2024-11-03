import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.date("date").defaultTo(knex.fn.now()).notNullable();
    table.string("name").notNullable();
    table.string("slug").notNullable();
    table.string("productId").notNullable();
    table.string("unit").notNullable();
    table.string("unitValue").notNullable();
    table.float("price").notNullable();
    table.float("discount").notNullable();
    table.string("description").notNullable();
    table.string("shortDescription").notNullable();
    table.string("type").notNullable();
    table.json("image").notNullable();
    table.json("gallery").notNullable();
    table.json("categories").notNullable();
    table.json("subcategories").notNullable();
    table.string("brand").notNullable();
    table.string("currency").notNullable();
    table.boolean("trending").defaultTo(false).notNullable();
    table.boolean("new").defaultTo(false).notNullable();
    table.boolean("bestSelling").defaultTo(false).notNullable();
    table.integer("quantity").notNullable();
    table.string("sku").notNullable();
    table.json("colors").notNullable();
    table.json("attributes").notNullable();
    table.json("additionalAttributes").notNullable();
    table.json("taxes").notNullable();
    table.json("tags").notNullable();
    table.json("shipping").notNullable();
    table.json("sellerInfo").notNullable();
    table.json("spec").notNullable();
    table.string("status").notNullable();
    table.string("featureStatus").notNullable();
    table.json("video").notNullable();
    table.string("productStatus").notNullable();
    table.string("review").notNullable();
    table.json("variant").notNullable();
    table.json("promo").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("products");
}
