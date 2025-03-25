import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Request } from "express";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(req: Request, data: CreateOrderDto): Promise<{
        id: string;
        productId: string;
        userId: string;
        count: number;
        summa: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
    }>;
    findAll(req: Request): Promise<({
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
            location: import("@prisma/client/runtime/library").JsonValue;
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
    findOne(id: string, req: Request): Promise<{
        id: string;
        productId: string;
        userId: string;
        count: number;
        summa: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
    }>;
    update(id: string, req: Request, data: UpdateOrderDto): Promise<{
        id: string;
        productId: string;
        userId: string;
        count: number;
        summa: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
    }>;
    remove(id: string, req: Request): Promise<{
        id: string;
        productId: string;
        userId: string;
        count: number;
        summa: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
    }>;
}
