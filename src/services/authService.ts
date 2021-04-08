/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import * as JWT from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  //Add user
  async login(body) {
    try {
      const user = await this.userModel
        .find({
          email: body['email'],
          password: body['password'],
        })
        .limit(1);

      if (user.length > 0) {
        const payload = {
          _id: user[0]._id,
          name: user[0].name,
          email: user[0].email,
        };

        const token = JWT.sign(payload, 'giftyKey', {
          expiresIn: '6m',
        });
        return {
          message: 'Register successfully',
          token: token,
          status: HttpStatus.OK,
        };
      } else {
        return {
          message: 'Email and password wrong',
          status: HttpStatus.UNAUTHORIZED,
        };
      }
    } catch (error) {
      console.log(error);
    }
  }

  //Get All User Data
  async register(body) {
    try {
      const data = {
        name: body['name'],
        email: body['email'],
        password: body['password'],
      };

      const userData = new this.userModel(data);

      const createdUser = await userData.save();

      const payload = {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      };

      const token = JWT.sign(payload, 'giftyKey', {
        expiresIn: '6m',
      });

      return { message: 'Register successfully', token: token };
    } catch (error) {
      console.log(error);
    }
  }
}
