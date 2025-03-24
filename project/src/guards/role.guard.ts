import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    ForbiddenException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { ROLES_KEY } from 'src/decorators/role.decorators';
  
  @Injectable()
  export class RoleGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      const roles: string[] = this.reflector.getAllAndOverride(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
  
      if (!roles || roles.length == 0) {
        return true; // Agar role yo‘q bo‘lsa, hech qanday cheklov qo‘ymaymiz
      }
  
      const request = context.switchToHttp().getRequest();
      const user = request.user;
  
      if (!user) {
        throw new UnauthorizedException('Foydalanuvchi autentifikatsiya qilinmagan');
      }
  
      const hasRole = roles.some((role) => role == user.role);
  
      if (!hasRole) {
        throw new ForbiddenException(`Sizga ushbu harakatni bajarishga ruxsat yo‘q`);
      }
  
      return true;
    }
  }
  