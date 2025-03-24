import {
  Injectable,
  BadRequestException,
  ConflictException,
  UnauthorizedException,
} from "@nestjs/common";
import { EmailUserDto, VerifyOtpDto } from "./dto/email-user.dto";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";
import { authenticator } from "otplib";
import { PrismaService } from "src/prisma/prisma.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import * as bcrypt from "bcrypt";
import { isUUID } from "class-validator";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
  private otpStore = new Map<string, { otp: string; verified: boolean }>();

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async sendEmailOtp(emailDto: EmailUserDto) {
    const { email } = emailDto;

    const existingUser = await this.prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      throw new ConflictException("Bu email allaqachon ro‘yxatdan o‘tgan");
    }

    const otp = authenticator.generate("secret");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: this.configService.get<string>("EMAIL_USER"),
        pass: this.configService.get<string>("EMAIL_PASS"),
      },
    });

    const mailOptions = {
      from: this.configService.get<string>("EMAIL_USER"),
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    this.otpStore.set(email, { otp, verified: false });

    return { message: "OTP emailga yuborildi." };
  }

  verifyEmailOtp(verifyOtpDto: VerifyOtpDto) {
    const { email, otp } = verifyOtpDto;
    const storedData = this.otpStore.get(email);

    if (!storedData) {
      throw new BadRequestException("Bu email uchun OTP topilmadi.");
    }

    if (storedData.otp != otp) {
      throw new BadRequestException("Noto‘g‘ri OTP.");
    }

    this.otpStore.set(email, { otp, verified: true });

    return { message: "OTP to‘g‘ri. Email tasdiqlandi." };
  }

  async register(registerDto: RegisterUserDto) {
    const { email, password, regionId, ...userData } = registerDto;

    const storedData = this.otpStore.get(email);
    if (!storedData || !storedData.verified) {
      throw new BadRequestException(
        "Email tasdiqlanmagan. Avval OTP tasdiqlang."
      );
    }

    if (regionId) {
      if (!isUUID(regionId)) {
        throw new BadRequestException("Noto‘g‘ri Region ID.");
      }

      const checkRegion = await this.prisma.region.findUnique({
        where: { id: regionId },
      });
      if (!checkRegion) {
        throw new BadRequestException("Region topilmadi.");
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userDataToSave: any = {
      ...userData,
      email,
      password: hashedPassword,
    };

    if (regionId) {
      userDataToSave.regionId = regionId;
    }

    const user = await this.prisma.user.create({ data: userDataToSave });

    return { user };
  }

  async login(loginDto: LoginUserDto) {
    const { email, password, ip } = loginDto;

    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException("Email yoki parol noto‘g‘ri.");
    }

    const isPasswordValid = await bcrypt.compare(password!, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Email yoki parol noto‘g‘ri.");
    }

    let session = await this.prisma.session.findFirst({
      where: { ipAddress: loginDto.ip, userId: user.id },
    });
    if (!session) {
      await this.prisma.session.create({
        data: { ipAddress: loginDto.ip, userId: user.id },
      });
    }

    const payload = { id: user.id, email: user.email, role: user.role };
    const token = this.jwtService.sign(payload);

    return { token };
  }
}
