import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
    // return process.env.HELLO_MESSAGE
  }
}
