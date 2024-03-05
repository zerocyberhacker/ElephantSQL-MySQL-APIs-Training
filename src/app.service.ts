import { Injectable } from '@nestjs/common';
import { DatabaseRepository } from './database/database.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly databaseRepository: DatabaseRepository,
    private readonly configService: ConfigService,
  ) {}

  async getHello(): Promise<any> {
    const result = await this.databaseRepository.getAllUser();
    return result;
  }
}
