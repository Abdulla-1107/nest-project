import { ColorItemService } from "./color-item.service";
import { CreateColorItemDto } from "./dto/create-color-item.dto";
export declare class ColorItemController {
    private readonly colorItemService;
    constructor(colorItemService: ColorItemService);
    create(dto: CreateColorItemDto): Promise<{
        id: string;
        productId: string;
        colorId: string;
    }>;
    findAll(): Promise<({
        product: {
            type: import(".prisma/client").$Enums.ProductType;
            description: string;
            id: string;
            status: string;
            name: string;
            userId: string;
            price: import("@prisma/client/runtime/library").Decimal;
            discountPercentage: number;
            discountAmount: import("@prisma/client/runtime/library").Decimal | null;
            finalPrice: import("@prisma/client/runtime/library").Decimal | null;
            count: number;
            condition: string;
            bargain: boolean;
            categoryId: string;
            createdAt: Date;
        };
        color: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        productId: string;
        colorId: string;
    })[]>;
    findOne(id: string): Promise<{
        id: string;
        productId: string;
        colorId: string;
    }>;
    remove(id: string): Promise<{
        message: string;
        deleted: {
            id: string;
            productId: string;
            colorId: string;
        };
    }>;
}
