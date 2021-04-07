/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from 'src/services/authService';

@Controller('api/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/auth/login')
  getBlogs(@Body() body) {
    return this.authService.login(body);
  }
  @Post('/auth/register')
  addBlog(@Body() body) {
    return this.authService.register(body);
  }
}
