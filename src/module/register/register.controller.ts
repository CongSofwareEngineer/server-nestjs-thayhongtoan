import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Register } from './register.schema';

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
  register(@Body() body: Register): string {
    return this.registerService.register(body);
  }
}
