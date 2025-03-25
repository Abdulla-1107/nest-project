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
    } & {
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
    })[]>;
}
