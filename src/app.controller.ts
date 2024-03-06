import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SearchUserByEmailDto } from './dto/search.user.by.email.dto';
import { LoginUserDto } from './dto/login.user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  start() {
    return { message: 'Wellcome' };
  }

  @Get('health')
  health() {
    return 'OK';
  }

  @Post('search-user-email')
  async searchUser(
    @Body() searchUserByEmailDto: SearchUserByEmailDto,
  ): Promise<any> {
    return this.appService.searchUser(searchUserByEmailDto);
  }

  @Post('get-all-user')
  async getAllUser(): Promise<any> {
    return this.appService.getAllUser();
  }

  @Get('count-all-user')
  async countAllUser(): Promise<any> {
    return this.appService.countAllUser();
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
    return this.appService.login(loginUserDto);
  }
}
