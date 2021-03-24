import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TenancyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> | Promise<any>{
    const request = context.switchToHttp().getRequest();
    if(request.route && request.route.path === '/auth/login'){
      console.log('TenancyGuard: Skipping login route');
      return true;
    }
    const tenantId = request.params.city;
    return (request.user as any).tenant == tenantId;
  }
}
