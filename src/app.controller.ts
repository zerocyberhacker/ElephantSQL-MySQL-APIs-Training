import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SearchUserByEmailDto } from './dto/search.user.by.email.dto';
import { LoginUserDto } from './dto/login.user.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('search-user-email')
  searchUser(@Body() searchUserByEmailDto: SearchUserByEmailDto): Promise<any> {
    return this.appService.searchUser(searchUserByEmailDto);
  }

  @Post('get-all-user')
  getAllUser(): Promise<any> {
    return this.appService.getAllUser();
  }

  @Get('count-all-user')
  countAllUser(): Promise<any> {
    return this.appService.countAllUser();
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto): Promise<any> {
    console.log();
    return this.appService.login(loginUserDto);
  }
}
