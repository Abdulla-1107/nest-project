import { PrismaService } from "src/prisma/prisma.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, data: CreateOrderDto): Promise<{
        id: string;
        userId: string;
        count: number;
        createdAt: Date;
        productId: string;
        summa: import("@prisma/client/runtime/library").Decimal;
    }>;
    findAll(userId: string): Promise<({
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
        count: number;
        createdAt: Date;
        productId: string;
        summa: import("@prisma/client/runtime/library").Decimal;
    })[]>;
    findOne(id: string, userId: string): Promise<{
        id: string;
        userId: string;
        count: number;
        createdAt: Date;
        productId: string;
        summa: import("@prisma/client/runtime/library").Decimal;
    }>;
    update(id: string, userId: string, data: UpdateOrderDto): Promise<{
        id: string;
        userId: string;
        count: number;
        createdAt: Date;
        productId: string;
        summa: import("@prisma/client/runtime/library").Decimal;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
        userId: string;
        count: number;
        createdAt: Date;
        productId: string;
        summa: import("@prisma/client/runtime/library").Decimal;
    }>;
}
