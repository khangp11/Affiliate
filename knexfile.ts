import { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST || "localhost",
      port: process.env.PG_PORT ? parseInt(process.env.PG_PORT) : 5432,
      user: process.env.PG_USER || "",
      password: process.env.PG_PASSWORD || "",
      database: process.env.PG_DATABASE || "",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};

export default config;
