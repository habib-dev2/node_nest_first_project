import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blog.schema';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  //Add Blog Function
  async addBlog(body) {
    try {
      const blog = new this.blogModel();

      blog.title = body['title'];
      blog.thumbnail = body['thumbnail'];
      blog.description = body['description'];

      await blog.save();

      return { message: 'Blog added successfully', status: HttpStatus.CREATED };
    } catch (error) {
      console.log(error);
    }
  }

  async getBlogs() {
    try {
      return await this.blogModel.find();
    } catch (error) {
      console.log(error);
    }
  }
}
