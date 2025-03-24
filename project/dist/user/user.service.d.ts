import { EmailUserDto, VerifyOtpDto } from "./dto/email-user.dto";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";
export declare class UserService {
    private configService;
    private prisma;
    private jwtService;
    private otpStore;
    constructor(configService: ConfigService, prisma: PrismaService, jwtService: JwtService);
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
    login(loginDto: LoginUserDto): Promise<{
        token: string;
    }>;
}
