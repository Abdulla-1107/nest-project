import { IsUUID } from "class-validator";

export class CreateProductViewDto {
  @IsUUID()
  productId: string;
}
