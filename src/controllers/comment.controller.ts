import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentService } from 'src/services/comment.service';

@Controller('api')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/comments')
  getCommentList() {
    return this.commentService.getCommentList();
  }
  @Post('/comments')
  addComment(@Body() body) {
    return this.commentService.addComment(body);
  }
}
