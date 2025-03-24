import { PartialType } from '@nestjs/swagger';
import { CreateProductViewDto } from './create-product-view.dto';

export class UpdateProductViewDto extends PartialType(CreateProductViewDto) {}
