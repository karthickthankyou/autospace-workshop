import { Injectable } from '@nestjs/common';
import { add } from '@autospace/sample-lib';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ' + add(23432, 223);
  }
}
