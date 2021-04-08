import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('api')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('/blogs')
  getBlogs() {
    return this.blogService.getBlogs();
  }
  @Post('/blogs')
  addBlog(@Body() body) {
    return this.blogService.addBlog(body);
  }
}
