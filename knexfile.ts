import { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST || 'localhost',
      port: process.env.PG_PORT ? parseInt(process.env.PG_PORT) : 5432,
      user: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASSWORD || 'khangnguyen',
      database: process.env.PG_DATABASE || 'Affiliate',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
  // có thể thêm các môi trường khác như production hoặc testing ở đây
};

export default config;
