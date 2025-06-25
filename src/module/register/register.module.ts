import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { LoggerMiddleware } from 'src/logger.middleware';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
// export class RegisterModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes('/*');
//   }
// }
