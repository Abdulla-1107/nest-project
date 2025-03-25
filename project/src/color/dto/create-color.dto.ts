import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateColorDto {
  @ApiProperty({ example: "Red", description: "Rang nomi" })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50, { message: "Rang nomi 50 ta belgidan oshmasligi kerak" })
  name: string;
}
