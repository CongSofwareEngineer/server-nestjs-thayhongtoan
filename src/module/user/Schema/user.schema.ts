import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Register } from 'src/module/register/Schema/register.schema';

@Schema({ versionKey: false })
export class User extends Register {}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
