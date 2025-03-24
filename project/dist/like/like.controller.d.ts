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
            type: import(".prisma/client").$Enums.ProductType;
            description: string;
            id: string;
            status: string;
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
