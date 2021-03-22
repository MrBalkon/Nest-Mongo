import { User } from '@domain/user/schemas/user.schema';
import { Role } from '@infrastructure/auth/roles.enum';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
      }
    
      handleRequest(err, user, info) {
        if (err || !user) {
          const commonUser = new User();
          commonUser.role = Role.Regular;
          return commonUser;
        }
        return user;
      }
}