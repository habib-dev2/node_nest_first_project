import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from 'src/schemas/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async getCommentList() {
    try {
      const comments = await this.commentModel.find();

      return comments;
    } catch (error) {
      console.log(error);
    }
  }
  async addComment(body) {
    try {
      const comments = new this.commentModel({
        name: body['name'],
        commentBody: body['commentBody'],
      });

      await comments.save();

      return 'Comment added successfully';
    } catch (error) {
      console.log(error);
    }
  }
}
