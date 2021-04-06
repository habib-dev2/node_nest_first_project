import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const myData = [
      {
        name: 'MD Habibur Rahman',
        email: 'hmhabib999 AT gmail DOT com',
        phone: '+880 1742077650',
        address: 'dhaka, Bangladesh',
      },
    ];
    return myData;
  }
}
