import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { RegisterService } from './register.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Register } from './Schema/register.schema';
import { User } from '../user/Schema/user.schema';

@ApiTags('register')
@Controller('/register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @ApiBody({
    description: 'User registration details',
    type: Register,
    required: true,
  })
  @Post('/register')
  async register(@Res() res, @Body() body: Register): Promise<User | Error> {
    try {
      return await this.registerService.register(body);
    } catch (error: any) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }
}
