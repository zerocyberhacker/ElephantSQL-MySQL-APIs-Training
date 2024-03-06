import { Client, QueryResult } from 'pg';
import { configApp } from 'src/config/app.config';

export class DatabaseRepository {
  constructor() {}

  async getAllUser() {
    const conString = configApp.database.elephantsql.url;
    const client = new Client(conString);
    try {
      await client.connect();
      const result: QueryResult<any> = await client.query(
        'SELECT * FROM users',
      );
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      console.error('error running query', err);
    } finally {
      await client.end();
    }
  }

  async searchUserByEmail(email: string) {
    const conString = configApp.database.elephantsql.url;
    const client = new Client(conString);
    try {
      await client.connect();
      const result: QueryResult<any> = await client.query(
        `SELECT * FROM users WHERE email = \'${email}\'`,
      );
      console.log(result.rows);
      return result.rows[0];
    } catch (err) {
      console.error('error running query', err);
    } finally {
      await client.end();
    }
  }

  async createUser(name: string, email: string, password: string) {
    const conString = configApp.database.elephantsql.url;
    const client = new Client(conString);
    try {
      await client.connect();
      const result: QueryResult<any> = await client.query(
        `INSERT INTO Users (name, email, password) VALUES (${name}, ${email}, ${password})`,
      );
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      console.error('error running query', err);
    } finally {
      await client.end();
    }
  }
}
