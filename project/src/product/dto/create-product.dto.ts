import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsJSON,
  IsEnum,
  Min,
  Max,
} from "class-validator";
import { ProductType } from "src/enums/product.type.enum";

export class CreateProductDto {
  @ApiProperty({ example: "iPhone 15", description: "Mahsulot nomi" })
  @IsString()
  name: string;

  @ApiProperty({ example: 1200, description: "Mahsulot narxi" })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 10, description: "Chegirma foizi", required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  discountPercentage?: number;

  @ApiProperty({ example: 100, description: "Chegirma miqdori", required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  discountAmount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  finalPrice?: number;

  @ApiProperty({ example: 5, description: "Ombordagi mahsulot soni" })
  @IsNumber()
  @Min(0)
  count: number;

  @ApiProperty({ example: "Yangi iPhone 15", description: "Mahsulot tavsifi" })
  @IsString()
  description: string;

  @ApiProperty({ example: "Yangi", description: "Mahsulot holati" })
  @IsString()
  condition: string;

  @ApiProperty({ example: true, description: "Kelishish mumkinligi", required: false })
  @IsOptional()
  @IsBoolean()
  bargain?: boolean;

  @ApiProperty({ example: "active", description: "Mahsulot statusi" })
  @IsString()
  status: string;

  @ApiProperty({ enum: ProductType, description: "Mahsulot turi" })
  @IsEnum(ProductType)
  type: ProductType;

  @ApiProperty({ example: '{"latitude": 41.2995, "longitude": 69.2401}', description: "Lokatsiya" })
  @IsJSON()
  location: any;

  @ApiProperty({ example: "123e4567-e89b-12d3-a456-426614174000", description: "Kategoriya ID" })
  @IsString()
  categoryId: string;

  @IsString()
  userId: string;
}
