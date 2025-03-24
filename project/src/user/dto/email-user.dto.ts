import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class EmailUserDto {
  @ApiProperty({
    example: "user@example.com",
    description: "Foydalanuvchi emaili",
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class VerifyOtpDto {
  @ApiProperty({
    example: "user@example.com",
    description: "Foydalanuvchi emaili",
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "123456",
    description: "Emailga kelgan 6 xonali kod",
  })
  @IsNotEmpty()
  @IsString()
  @Length(6, 6)
  otp: string;
}
