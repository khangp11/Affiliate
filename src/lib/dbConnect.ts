import knex, { Knex } from "knex";
import config from "../../knexfile";

let db: Knex | null = null;

async function dbConnect(): Promise<Knex> {
  if (db) {
    return db;
  }

  db = knex(config.development);

  try {
    await db.raw("SELECT 1");
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }

  return db;
}

export default dbConnect;
