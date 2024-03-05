import { Get, Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, QueryResult } from 'pg';
import { configApp } from 'src/config/app.config';

@Injectable()
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
}
