import { PrismaService } from "src/prisma/prisma.service";
export declare class ProductViewService {
    private prisma;
    constructor(prisma: PrismaService);
    getProductViewCount(productId: string): Promise<{
        productId: string;
        viewCount: number;
    }>;
    addView(userId: string, productId: string): Promise<{
        count: number;
        productId: string;
        id: string;
        userId: string;
        date: Date;
    } | {
        message: string;
    }>;
}
