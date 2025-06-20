import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from 'src/module/user/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Exporting UserService to be used in other modulesß
})
export class UserModule {}
