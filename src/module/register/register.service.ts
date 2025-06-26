import { Inject, Injectable } from '@nestjs/common';
import { Register } from './Schema/register.schema';
import { User } from '../user/Schema/user.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class RegisterService {
  constructor(@Inject(UserService) private userService: UserService) {}
  async register(body: Register): Promise<User> {
    const data: User = {
      userName: body.userName,
      phone: body.phone,
      age: body.age,
    };
    if (body.email) {
      data.email = body.email;
    }
    if (body.password) {
      data.password = body.password;
    }
    const isExit = await this.userService.findOne(data.userName);
    if (isExit) {
      throw new Error('User is exist');
    }

    const user = await this.userService.create(data);
    return user;
  }
}
