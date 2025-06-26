import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/module/user/Schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
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

  async findOne(phone: string): Promise<User | null> {
    const data = await this.userModel
      .findOne({
        phone: phone,
      })
      .exec();

    return data;
  }

  async create(user: User): Promise<User> {
    const data = await this.userModel.create(user);
    return data;
  }
}
