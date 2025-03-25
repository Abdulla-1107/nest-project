import { IsNotEmpty, IsUUID, IsOptional, MaxLength, MinLength, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateChatDto {
  @ApiProperty({ example: "Salom, qalesan?", description: "Xabar matni" })
  @IsNotEmpty()
  @IsString()
  @MinLength(1, { message: "Xabar kamida 1 ta belgidan iborat bo‘lishi kerak" })
  @MaxLength(500, { message: "Xabar uzunligi 500 ta belgidan oshmasligi kerak" })
  text: string;

  @IsUUID()
  fromId: string;

  @ApiProperty({ example: "a2d3e4f5-6b7c-8d9e-0f1a-2b3c4d5e6f7g", description: "Xabar qabul qilayotgan foydalanuvchi IDsi" })
  @IsUUID()
  toId: string;

  @ApiPropertyOptional({ example: "c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f", description: "Mahsulot IDsi (agar mahsulot bilan bog‘liq bo‘lsa)" })
  @IsUUID()
  @IsOptional()
  productId?: string;
}
