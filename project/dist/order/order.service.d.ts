import { PrismaService } from "src/prisma/prisma.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { OrderGateway } from "./order.gateway";
export declare class OrderService {
    private prisma;
    private orderGateway;
    constructor(prisma: PrismaService, orderGateway: OrderGateway);
    create(userId: string, data: CreateOrderDto): Promise<{
        id: string;
        productId: string;
        userId: string;
        count: number;
        summa: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
    }>;
    findAll(userId: string): Promise<({
        product: {
            id: string;
            userId: string;
            count: number;
            createdAt: Date;
            name: string;
            price: import("@prisma/client/runtime/library").Decimal;
            discountPercentage: number;
            discountAmount: import("@prisma/client/runtime/library").Decimal | null;
            finalPrice: import("@prisma/client/runtime/library").Decimal | null;
            description: string;
            condition: string;
            bargain: boolean;
            status: string;
            type: import(".prisma/client").$Enums.ProductType;
            categoryId: string;
        };
    } & {
        id: string;
        productId: string;
        userId: string;
        count: number;
        summa: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
    })[]>;
    findOne(id: string, userId: string): Promise<{
        id: string;
        productId: string;
        userId: string;
        count: number;
        summa: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
    }>;
    update(id: string, userId: string, data: UpdateOrderDto): Promise<{
        id: string;
        productId: string;
        userId: string;
        count: number;
        summa: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
        productId: string;
        userId: string;
        count: number;
        summa: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
    }>;
}
