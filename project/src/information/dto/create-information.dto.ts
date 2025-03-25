import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateInformationDto {
  @ApiProperty({ example: "Bu sayt haqida ma'lumot...", description: "Sayt haqida" })
  @IsString()
  @MaxLength(2000)
  about: string;

  @ApiProperty({ example: "Maxfiylik siyosati...", description: "Privacy policy" })
  @IsString()
  @MaxLength(5000)
  privacyPolicy: string;

  @ApiProperty({ example: "admin@example.com", description: "Email" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "+998901234567", description: "Telefon raqami" })
  @IsString()
  phone: string;

  @ApiPropertyOptional({ example: "https://t.me/example", description: "Telegram manzili" })
  @IsOptional()
  @IsString()
  telegram?: string;

  @ApiPropertyOptional({ example: "https://instagram.com/example", description: "Instagram" })
  @IsOptional()
  @IsString()
  instagram?: string;

  @ApiPropertyOptional({ example: "https://facebook.com/example", description: "Facebook" })
  @IsOptional()
  @IsString()
  facebook?: string;
}
