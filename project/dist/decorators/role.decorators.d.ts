import { Roles } from 'src/enums/role.enum';
export declare const ROLES_KEY = "roles";
export declare const Role: (...roles: Roles[]) => import("@nestjs/common").CustomDecorator<string>;
