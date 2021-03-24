import { User } from '@domain/user/schemas/user.schema';
import { Role } from '@infrastructure/auth/roles.enum';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
      }
  
      handleRequest(err, user, info) {
        if(!user && !(user.role == Role.Admin)){
          throw new UnauthorizedException();
        }
        return user;
      }
}