import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { RegisterModule } from 'src/module/register/register.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [
    AuthModule,
    RegisterModule,
    // LoggerMiddleware,
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
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes('/*');
//   }
// }
export class AppModule {}
