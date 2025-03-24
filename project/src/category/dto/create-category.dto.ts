import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { CategoryType } from 'src/enums/category.type.enum';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Smartphones', description: 'Kategoriya nomi' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ 
    example: CategoryType.PHONE, 
    description: 'Kategoriya turi', 
    enum: CategoryType 
  })
  @IsEnum(CategoryType)
  type: CategoryType;
}
