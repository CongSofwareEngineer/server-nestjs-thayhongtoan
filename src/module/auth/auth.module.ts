import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/module/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/module/auth/auth.controller';

@Global()
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecretKey',
      global: true,
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService], // Exporting AuthService and JwtModule for use in other modules
})
export class AuthModule {}
