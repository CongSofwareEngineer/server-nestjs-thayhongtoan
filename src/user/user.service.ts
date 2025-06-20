import { Injectable } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  private readonly users = [
    {
      username: 'john',
      password: 'changeme',
    },
    {
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate async operation
    return this.users.find((user) => user.username === username);
  }
}
