import { LikeService } from "./like.service";
import { Request } from "express";
export declare class LikeController {
    private readonly likeService;
    constructor(likeService: LikeService);
    likeProduct(req: Request, productId: string): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
    }>;
    unlikeProduct(req: Request, productId: string): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
    }>;
    getUserLikes(req: Request): Promise<({
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
