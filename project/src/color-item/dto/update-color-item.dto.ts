import { PartialType } from '@nestjs/swagger';
import { CreateColorItemDto } from './create-color-item.dto';

export class UpdateColorItemDto extends PartialType(CreateColorItemDto) {}
