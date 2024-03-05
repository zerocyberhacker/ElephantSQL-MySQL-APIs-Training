import * as dotenv from 'dotenv';
dotenv.config();

export const configApp = {
  app: {
    host: process.env.APP_HOST,
    port: process.env.APP_POST,
  },
  database: {
    elephantsql: {
      url: process.env.ELEPHANT_SQL_URL,
    },
  },
};
