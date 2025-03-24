import { Roles } from "src/enums/role.enum";
import { UserStatus } from "src/enums/status.enum";
export declare class RegisterUserDto {
    firstName: string;
    lastName: string;
    image: string;
    phone: string;
    email: string;
    password: string;
    regionId?: string;
    role?: Roles;
    status?: UserStatus;
}
