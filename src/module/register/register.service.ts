import { Inject, Injectable } from '@nestjs/common';
import { Register } from './register.schema';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/user.schema';
import { Model } from 'mongoose';
import { UserService } from '../user/user.service';

@Injectable()
export class RegisterService {
  constructor(@Inject(UserService) private userService: UserService) {}
  register(body: Register): string {
    const data = {
      userName: body.userName,
      password: body.password,
    };
    return 'Hello World!';
  }
}
