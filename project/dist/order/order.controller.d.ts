import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Request } from "express";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(req: Request, data: CreateOrderDto): Promise<{
        id: string;
        userId: string;
        count: number;
        createdAt: Date;
        productId: string;
        summa: import("@prisma/client/runtime/library").Decimal;
    }>;
    findAll(req: Request): Promise<({
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
    findOne(id: string, req: Request): Promise<{
        id: string;
        userId: string;
        count: number;
        createdAt: Date;
        productId: string;
        summa: import("@prisma/client/runtime/library").Decimal;
    }>;
    update(id: string, req: Request, data: UpdateOrderDto): Promise<{
        id: string;
        userId: string;
        count: number;
        createdAt: Date;
        productId: string;
        summa: import("@prisma/client/runtime/library").Decimal;
    }>;
    remove(id: string, req: Request): Promise<{
        id: string;
        userId: string;
        count: number;
        createdAt: Date;
        productId: string;
        summa: import("@prisma/client/runtime/library").Decimal;
    }>;
}
