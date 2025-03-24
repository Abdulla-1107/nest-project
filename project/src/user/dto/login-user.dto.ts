import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
  @ApiProperty({
    example: "user@example.com",
    description: "Foydalanuvchining emaili",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "123456",
    description: "Foydalanuvchi paroli (kamida 6 ta belgi)",
  })
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  ip?: string;
}
