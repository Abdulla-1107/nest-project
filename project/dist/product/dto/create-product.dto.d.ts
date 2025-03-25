import { ProductType } from "src/enums/product.type.enum";
export declare class CreateProductDto {
    name: string;
    price: number;
    discountPercentage?: number;
    discountAmount?: number;
    finalPrice?: number;
    count: number;
    description: string;
    condition: string;
    bargain?: boolean;
    status: string;
    type: ProductType;
    categoryId: string;
    userId: string;
}
