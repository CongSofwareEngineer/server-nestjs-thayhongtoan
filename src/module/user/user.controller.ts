import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { User } from './Schema/user.schema';
@ApiTags('User')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/hello')
  getHello(): string {
    return 'hello';
  }

  @ApiBody({
    description: 'User registration details',
    type: User,
    required: true,
  })
  @Post('/register')
  register(@Body() body: User): string {
    return 'Hello World!';
  }

  @ApiBody({
    description: 'User registration details',

    schema: {
      example: {
        phone: '0392225405',
        password: 'password',
      },
    },

    required: true,
  })
  @Post('/login')
  login(@Body() body: User): string {
    return 'login';
  }
}
