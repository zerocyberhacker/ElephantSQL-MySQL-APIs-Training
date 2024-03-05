import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseRepository } from './database/database.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [ConfigService, AppService, DatabaseRepository],
  exports: [ConfigService, AppService, DatabaseRepository],
})
export class AppModule {}
