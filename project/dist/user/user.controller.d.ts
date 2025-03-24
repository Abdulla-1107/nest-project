import { UserService } from "./user.service";
import { EmailUserDto, VerifyOtpDto } from "./dto/email-user.dto";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    sendEmailOtp(emailDto: EmailUserDto): Promise<{
        message: string;
    }>;
    verifyEmailOtp(verifyOtpDto: VerifyOtpDto): {
        message: string;
    };
    register(registerDto: RegisterUserDto): Promise<{
        user: {
            email: string;
            id: string;
            firstName: string;
            lastName: string;
            image: string;
            phone: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            status: import(".prisma/client").$Enums.Status;
            regionId: string | null;
        };
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        token: string;
    }>;
}
