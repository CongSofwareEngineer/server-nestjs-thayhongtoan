import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Register {
  @Prop({ type: String, required: true })
  @ApiProperty({ description: 'User name', example: 'username' })
  userName: string;

  @Prop({ type: String, required: true })
  @ApiProperty({ description: 'User password', example: 'password' })
  password: string;

  // @Prop({ type: String, required: false })
  // @ApiProperty({ description: 'User email', example: 'email' })
  // email: string;

  // @Prop({ type: String, required: false })
  // @ApiProperty({ description: 'User phone number', example: '1234567890' })
  // phoneNumber: string;

  // @Prop({ type: Number, required: false })
  // @ApiProperty({ description: 'User age', example: 1 })
  // age: string;
}
