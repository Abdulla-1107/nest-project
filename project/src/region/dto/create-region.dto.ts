import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRegionDto {
  @ApiProperty({ example: "Toshkent", description: "Hudud nomi" })
  @IsNotEmpty()
  @IsString()
  name: string;
}
