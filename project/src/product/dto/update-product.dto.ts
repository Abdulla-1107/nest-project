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

export class UpdateProductDto {
  @ApiProperty({ example: "iPhone 15", description: "Mahsulot nomi", required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 1200, description: "Mahsulot narxi", required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

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

  @IsOptional()
  @IsNumber()
  @Min(0)
  count?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  condition?: string;

  @IsOptional()
  @IsBoolean()
  bargain?: boolean;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsEnum(ProductType)
  type?: ProductType;

  @IsOptional()
  @IsJSON()
  location?: any;

  @IsOptional()
  @IsString()
  categoryId?: string;

  @IsOptional()
  @IsString()
  userId?: string;
}
