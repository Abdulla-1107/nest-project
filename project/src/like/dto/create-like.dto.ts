import { IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLikeDto {
  @ApiProperty({ example: "987e6543-e89b-12d3-a456-426614174999", description: "Mahsulot ID" })
  @IsUUID()
  productId: string;
}
