import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("orders", (table) => {
    table.increments("id").primary();
    table.string("orderId").notNullable();
    table.date("orderDate").defaultTo(knex.fn.now()).notNullable();
    table.json("products").notNullable();
    table.string("status").notNullable();
    table.string("paymentStatus").notNullable();
    table.json("billingInfo").notNullable();
    table.json("shippingInfo").notNullable();
    table.json("deliveryInfo").notNullable();
    table.string("paymentMethod").notNullable();
    table.string("paymentId").notNullable();
    table.float("totalPrice").notNullable();
    table.float("payAmount").notNullable();
    table.json("coupon").notNullable();
    table.string("orderStatus").notNullable();
    table.boolean("new").defaultTo(false).notNullable();
    table.json("user").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("orders");
}
