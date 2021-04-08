import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getAllUsers')
  getuserList(@Req() req) {
    return this.userService.getuserList(req['user']);
  }

  @Post('/add-user')
  addUser(@Body() body) {
    return this.userService.addUser(body);
  }
}
