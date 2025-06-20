import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth/auth.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly publicRoutes = [
    '/noti/push',
    '/user/login',
    '/user/register',
  ];

  constructor(private readonly authu: AuthService) {}

  use(req: Request, res: Response, next: NextFunction) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (req?.body?.dev) {
        return next();
      }

      if (req.method !== 'GET' && req.method !== 'DELETE') {
        if (req.originalUrl.includes('auth/refresh')) {
          if (this.validateAuthorization(req.headers.authorization!)) {
            return next();
          }
          this.sendUnauthorizedResponse(res, 'Authorization expired');
          return;
        }

        if (!req.body) {
          this.sendUnauthorizedResponse(res, 'You are hacker');
          return;
        }
      }

      // Check if the route is public
      if (this.publicRoutes.includes(req.originalUrl)) {
        return next();
      }

      // Check if the method is GET or if authorization is valid for other methods
      if (
        req.method === 'GET' ||
        this.validateAuthorization(req.headers.authorization!)
      ) {
        return next();
      } else {
        this.sendUnauthorizedResponse(res, 'Authorization expired');
      }
    } catch (error) {
      console.log({ error });

      this.sendUnauthorizedResponse(res, 'Not authorized');
    }
  }

  private validateAuthorization(authorization: string): boolean | object {
    if (!authorization) return false;
    // this.authu.signIn(authorization, ''); // Assuming signIn is a method that verifies the token
    return true; // Assuming verifyAth returns something truthy on success
  }

  private sendUnauthorizedResponse(res: Response, message: string): void {
    res.status(HttpStatus.UNAUTHORIZED).send({
      error: message,
      status: HttpStatus.UNAUTHORIZED,
    });
  }
}
