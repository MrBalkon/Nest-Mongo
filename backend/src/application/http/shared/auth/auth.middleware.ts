import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { Role } from '../../../../infrastructure/auth/roles.enum';
// import { Logger } from './logger.service'

@Injectable()
export class AuthCheckerMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    // req.user = {
    //   role: Role.Admin
    // }
    // console.log(req.user)
    next();
  }
}