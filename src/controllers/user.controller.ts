import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('/api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  getuserList() {
    return this.userService.getuserList();
  }

  @Post('/add-user')
  addUser(@Body() body) {
    return this.userService.addUser(body);
  }
}
