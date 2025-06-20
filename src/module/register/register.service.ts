import { Injectable } from '@nestjs/common';
import { Register } from 'src/Schemas/register';

@Injectable()
export class RegisterService {
  register(body: Register): string {
    return 'Hello World!';
  }
}
