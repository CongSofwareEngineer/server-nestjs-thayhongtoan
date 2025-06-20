import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RegisterModule } from 'src/module/register/register.module';
import { AuthModule } from 'src/module/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    RegisterModule,
    ConfigModule.forRoot({
      envFilePath: '.env.test.local',
      isGlobal: true,
    }),
    // MongooseModule.forRoot(
    //   `mongodb+srv://${process.env.USER_NAME_MONGO}:${process.env.PASSWORD_MONGO}@tc-store-admin.mpkyxqj.mongodb.net/?retryWrites=true&w=majority&appName=tc-store-admin`,
    //   {
    //     dbName: DB_NAME,
    //     enableUtf8Validation: true,
    //   },
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
