import { IsString, IsInt, Min, Max } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {
  @ApiProperty({ example: "Zo‘r mahsulot!", description: "Izoh matni" })
  @IsString()
  text: string;

  @ApiProperty({ example: 5, description: "Yulduz bahosi (1-5)", minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  star: number;

  @ApiProperty({ example: "123e4567", description: "Mahsulot ID si" })
  @IsString()
  productId: string;
}
