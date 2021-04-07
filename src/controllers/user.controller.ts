import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('/api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  getuserList(@Req() req) {
    return this.userService.getuserList(req['user']);
  }

  @Post('/add-user')
  addUser(@Body() body) {
    return this.userService.addUser(body);
  }
}
