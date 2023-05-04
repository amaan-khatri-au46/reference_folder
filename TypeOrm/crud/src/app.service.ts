import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  addData() : string {
    return 'Data Added Successfull'
  }
}
