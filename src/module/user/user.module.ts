import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from 'src/module/user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_COLLECTION } from 'src/common/mongoDB';
import { User, UserSchema } from './Schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        collection: DB_COLLECTION.Register,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Exporting UserService to be used in other modulesß
})
export class UserModule {}
