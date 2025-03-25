import { IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateColorItemDto {
  @ApiProperty({ example: "p1", description: "Mahsulot IDsi" })
  @IsUUID()
  productId: string;

  @ApiProperty({ example: "111", description: "Rang IDsi" })
  @IsUUID()
  colorId: string;
}
