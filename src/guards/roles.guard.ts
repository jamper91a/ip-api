/**
 * https://docs.nestjs.com/guards#role-based-authentication
 */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    //TODO Change user.roles for the real property
    return this.matchRoles(roles, user.role);
  }
  private matchRoles(roles: string[], userRole: string) {
    for (const role of roles) {
      if (role === userRole) {
        return true;
      }
    }
    throw new UnauthorizedException('Role no valid');
  }
}
