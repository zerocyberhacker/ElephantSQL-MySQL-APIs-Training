import { Injectable } from '@nestjs/common';
import { DatabaseRepository } from './database/database.repository';
import { ConfigService } from '@nestjs/config';
import { SearchUserByEmailDto } from './dto/search.user.by.email.dto';
import { LoginUserDto } from './dto/login.user.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly databaseRepository: DatabaseRepository,
    private readonly configService: ConfigService,
  ) {}

  async searchUser(searchUserByEmailDto: SearchUserByEmailDto): Promise<any> {
    const result = await this.databaseRepository.searchUserByEmail(
      searchUserByEmailDto.email,
    );
    return result;
  }

  async getAllUser(): Promise<any> {
    const result = await this.databaseRepository.getAllUser();
    return result;
  }

  async countAllUser(): Promise<any> {
    const users_data: Array<any> = await this.databaseRepository.getAllUser();
    const result = {
      total_user: users_data.length,
    };
    return result;
  }

  async login(loginUserDto: LoginUserDto): Promise<any> {
    try {
      const users_data: Array<any> =
        await this.databaseRepository.searchUserByEmail(loginUserDto.email);

      if (users_data.length === 0) {
        return {
          message: 'User not found.',
          login_status: false,
        };
      }

      if (users_data[0].password !== loginUserDto.password) {
        return {
          message: 'Email or password error.',
          login_status: false,
        };
      }

      if (users_data[0].password === loginUserDto.password) {
        return {
          message: 'Login success.',
          login_status: true,
        };
      }
    } catch (e) {
      throw e;
    }
  }
}
