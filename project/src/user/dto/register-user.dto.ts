import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { Roles } from "src/enums/role.enum";
import { UserStatus } from "src/enums/status.enum";

export class RegisterUserDto {
  @ApiProperty({ example: "Ali", description: "Foydalanuvchining ismi" })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: "Valiyev", description: "Foydalanuvchining familiyasi" })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ example: "https://example.com/avatar.jpg", description: "Profil rasmi URL" })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({ example: "+998901234567", description: "Telefon raqami" })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ example: "user@example.com", description: "Email manzili" })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: "P@ssw0rd", description: "Parol (kamida 6 ta belgi)" })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: "region-123", description: "Hudud ID", required: false })
  @IsOptional()
  @IsString()
  regionId?: string;

  @ApiProperty({ example: "USER", description: "Foydalanuvchi roli (USER yoki ADMIN)", required: false })
  @IsOptional() 
  @IsEnum(Roles)
  role?: Roles; 

  status?: UserStatus
}
