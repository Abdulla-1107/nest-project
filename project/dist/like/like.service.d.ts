import { PrismaService } from "src/prisma/prisma.service";
export declare class LikeService {
    private prisma;
    constructor(prisma: PrismaService);
    likeProduct(userId: string, productId: string): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
    }>;
    unlikeProduct(userId: string, productId: string): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
    }>;
    getUserLikes(userId: string): Promise<({
        product: {
            type: import(".prisma/client").$Enums.ProductType;
            description: string;
            status: string;
            id: string;
            name: string;
            userId: string;
            location: import("@prisma/client/runtime/library").JsonValue;
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
    } & {
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
    })[]>;
}
