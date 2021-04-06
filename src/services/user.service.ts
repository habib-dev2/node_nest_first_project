import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  //Add user
  async addUser(body) {
    try {
      const user = new this.userModel({
        name: body['name'],
        email: body['email'],
        password: body['password'],
      });
      await user.save();

      return 'Comment added successfully';
    } catch (error) {
      console.log(error);
    }
  }

  //Get All User Data
  async getuserList() {
    try {
      return await this.userModel.find();
    } catch (error) {
      console.log(error);
    }
  }
}
