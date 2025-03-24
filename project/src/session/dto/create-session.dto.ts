import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class CreateSessionDto {
  @ApiProperty({ description: "User ID", example: "123e4567-e89b-12d3-a456-426614174000" })
  @IsString()
  userId: string;

  @ApiPropertyOptional({ description: "IP address", example: "192.168.1.1" })
  @IsOptional()
  @IsString()
  ipAddress?: string;

  @ApiPropertyOptional({ description: "Location", example: "Tashkent, Uzbekistan" })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ description: "Additional info", example: "User logged in from mobile" })
  @IsOptional()
  @IsString()
  info?: string;
}
