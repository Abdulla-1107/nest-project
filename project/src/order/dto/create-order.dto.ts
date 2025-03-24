import { IsString, IsInt, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  @ApiProperty({ example: "123e4567", description: "Mahsulot ID si" })
  @IsString()
  productId: string;

  @ApiProperty({ example: 2, description: "Buyurtma miqdori", minimum: 1 })
  @IsInt()
  @Min(1)
  count: number;
}
