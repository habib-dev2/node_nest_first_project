/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from 'src/services/authService';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  getBlogs(@Body() body) {
    return this.authService.login(body);
  }
  @Post('/register')
  addBlog(@Body() body) {
    return this.authService.register(body);
  }
}
