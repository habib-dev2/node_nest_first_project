import { CommentService } from './services/comment.service';
import { CommentController } from './controllers/comment.controller';
import { UserService } from './services/user.service';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { BlogService } from './blog/blog.service';
import { Blog, BlogSchema } from './blog/blog.schema';
import { AuthService } from './services/authService';
import { AuthController } from './controllers/authController';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { BlogController } from './blog/blog.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:t9BK3UkofVGwkd4B@cluster0.wijmb.mongodb.net/gifty?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Comment.name, schema: CommentSchema },
      { name: Blog.name, schema: BlogSchema },
    ]),
  ],
  controllers: [
    CommentController,
    AppController,
    UserController,
    AuthController,
    BlogController,
  ],
  providers: [
    CommentService,
    UserService,
    AppService,
    BlogService,
    AuthService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '/api/users/*', method: RequestMethod.ALL });
  }
}
