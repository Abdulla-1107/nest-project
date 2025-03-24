import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { EmailUserDto, VerifyOtpDto } from "./dto/email-user.dto";
import { RegisterUserDto } from "./dto/register-user.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { LoginUserDto } from "./dto/login-user.dto";

@ApiTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: "Emailga OTP yuborish" })
  @ApiResponse({ status: 201, description: "OTP yuborildi" })
  @ApiResponse({ status: 400, description: "Email noto‘g‘ri" })
  @Post("send-otp")
  sendEmailOtp(@Body() emailDto: EmailUserDto) {
    return this.userService.sendEmailOtp(emailDto);
  }

  @ApiOperation({ summary: "OTP ni tekshirish" })
  @ApiResponse({ status: 200, description: "OTP to‘g‘ri" })
  @ApiResponse({ status: 400, description: "OTP noto‘g‘ri" })
  @Post("verify-otp")
  verifyEmailOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.userService.verifyEmailOtp(verifyOtpDto);
  }

  @ApiOperation({ summary: "Foydalanuvchini ro'yxatdan o'tkazish" })
  @ApiResponse({ status: 201, description: "Foydalanuvchi ro'yxatdan o'tdi" })
  @ApiResponse({
    status: 400,
    description: "Email aktiv emas yoki noto'g'ri ma'lumot",
  })
  @Post("register")
  register(@Body() registerDto: RegisterUserDto) {
    return this.userService.register(registerDto);
  }

  @ApiOperation({ summary: "Foydalanuvchi tizimga kirishi" })
  @ApiResponse({ status: 200, description: "Muvaffaqiyatli login" })
  @ApiResponse({ status: 400, description: "Email yoki parol noto‘g‘ri" })
  @Post("login")
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }
}
