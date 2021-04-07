/* eslint-disable prettier/prettier */
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import * as JWT from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    try {
      let token = req.headers['authorization'] || req.headers['Authorization'];

      if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length).trimLeft();

        const payload = JWT.verify(token, 'giftyKey');

        if (payload) {
          req['user'] = payload;
          // console.log(req['publisher']);

          next();
        }
      }
    } catch (error) {
      throw new HttpException(
        {
          error: 'Auth token not valid or provided',
          status: HttpStatus.UNAUTHORIZED,
        },

        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
