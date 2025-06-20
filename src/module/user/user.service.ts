import { Injectable } from '@nestjs/common';
import { User } from 'src/module/user/user.schema';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      userName: 'john',

      password: 'changeme',
    },
    {
      userName: 'maria',
      password: 'guess',
    },
  ];

  async findOne(userName: string): Promise<User | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate async operation
    return this.users.find((user) => user.userName === userName);
  }
}
