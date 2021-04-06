import { CommentService } from './services/comment.service';
import { CommentController } from './controllers/comment.controller';
import { UserService } from './services/user.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:t9BK3UkofVGwkd4B@cluster0.wijmb.mongodb.net/gifty?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Comment.name, schema: CommentSchema },
    ]),
  ],
  controllers: [CommentController, AppController, UserController],
  providers: [CommentService, UserService, AppService],
})
export class AppModule {}
