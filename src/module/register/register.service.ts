import { Injectable } from '@nestjs/common';
import { Register } from './register.schema';

@Injectable()
export class RegisterService {
  register(body: Register): string {
    const data = {
      userName: body.userName,
      password: body.password,
    };
    return 'Hello World!';
  }
}
