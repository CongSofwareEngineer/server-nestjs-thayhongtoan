import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsPhoneNumber } from 'class-validator';

export class Register {
  @Prop({ type: String, required: true })
  @ApiProperty({ description: 'User name', example: 'username' })
  userName: string;

  @Prop({ type: String, required: true })
  @ApiProperty({ description: 'User password', example: 'password' })
  password: string;

  @IsEmail({}, { message: 'Email is not valid' })
  @Prop({ type: String, required: false })
  @ApiProperty({ description: 'User email', example: 'email' })
  email?: string;

  @IsPhoneNumber('VN', { message: 'Phone number is not valid' })
  @Prop({ type: String, required: false })
  @ApiProperty({ description: 'User phone number', example: '0392225405' })
  phone?: string;

  @IsNumber(
    { maxDecimalPlaces: 0, allowNaN: false },
    { message: 'Age is not valid', always: false },
  )
  @Prop({ type: Number, required: false })
  @ApiProperty({ description: 'User age', example: 1, type: Number })
  age?: string;
}
