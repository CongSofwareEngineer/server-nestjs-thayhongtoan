import { Schema } from '@nestjs/mongoose';
import { Register } from 'src/module/register/register.schema';

@Schema({ versionKey: false })
export class User extends Register {}
