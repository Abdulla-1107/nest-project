import { PrismaService } from "src/prisma/prisma.service";
import { CreateColorItemDto } from "./dto/create-color-item.dto";
export declare class ColorItemService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateColorItemDto): Promise<{
        id: string;
        productId: string;
        colorId: string;
    }>;
    findAll(): Promise<({
        product: {
            status: string;
            id: string;
            name: string;
            userId: string;
            description: string;
            price: import("@prisma/client/runtime/library").Decimal;
            discountPercentage: number;
            discountAmount: import("@prisma/client/runtime/library").Decimal | null;
            finalPrice: import("@prisma/client/runtime/library").Decimal | null;
            count: number;
            condition: string;
            bargain: boolean;
            type: import(".prisma/client").$Enums.ProductType;
            createdAt: Date;
            categoryId: string;
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
