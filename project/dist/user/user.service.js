"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
const otplib_1 = require("otplib");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const class_validator_1 = require("class-validator");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    configService;
    prisma;
    jwtService;
    otpStore = new Map();
    constructor(configService, prisma, jwtService) {
        this.configService = configService;
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async sendEmailOtp(emailDto) {
        const { email } = emailDto;
        const existingUser = await this.prisma.user.findFirst({ where: { email } });
        if (existingUser) {
            throw new common_1.ConflictException("Bu email allaqachon ro‘yxatdan o‘tgan");
        }
        const otp = otplib_1.authenticator.generate("secret");
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: this.configService.get("EMAIL_USER"),
                pass: this.configService.get("EMAIL_PASS"),
            },
        });
        const mailOptions = {
            from: this.configService.get("EMAIL_USER"),
            to: email,
            subject: "Your OTP Code",
            text: `Your OTP code is: ${otp}`,
        };
        await transporter.sendMail(mailOptions);
        this.otpStore.set(email, { otp, verified: false });
        return { message: "OTP emailga yuborildi." };
    }
    verifyEmailOtp(verifyOtpDto) {
        const { email, otp } = verifyOtpDto;
        const storedData = this.otpStore.get(email);
        if (!storedData) {
            throw new common_1.BadRequestException("Bu email uchun OTP topilmadi.");
        }
        if (storedData.otp != otp) {
            throw new common_1.BadRequestException("Noto‘g‘ri OTP.");
        }
        this.otpStore.set(email, { otp, verified: true });
        return { message: "OTP to‘g‘ri. Email tasdiqlandi." };
    }
    async register(registerDto) {
        const { email, password, regionId, ...userData } = registerDto;
        const storedData = this.otpStore.get(email);
        if (!storedData || !storedData.verified) {
            throw new common_1.BadRequestException("Email tasdiqlanmagan. Avval OTP tasdiqlang.");
        }
        if (regionId) {
            if (!(0, class_validator_1.isUUID)(regionId)) {
                throw new common_1.BadRequestException("Noto‘g‘ri Region ID.");
            }
            const checkRegion = await this.prisma.region.findUnique({
                where: { id: regionId },
            });
            if (!checkRegion) {
                throw new common_1.BadRequestException("Region topilmadi.");
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userDataToSave = {
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
    async login(loginDto) {
        const { email, password, ip } = loginDto;
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new common_1.UnauthorizedException("Email yoki parol noto‘g‘ri.");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException("Email yoki parol noto‘g‘ri.");
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
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map