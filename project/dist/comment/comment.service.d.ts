import { PrismaService } from "src/prisma/prisma.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
export declare class CommentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, data: CreateCommentDto): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
        text: string;
        star: number;
    }>;
    findAll(productId: string): Promise<({
        user: {
            email: string;
            password: string;
            regionId: string | null;
            phone: string;
            firstName: string;
            lastName: string;
            image: string;
            role: import(".prisma/client").$Enums.Role;
            status: import(".prisma/client").$Enums.Status;
            id: string;
        };
    } & {
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
        text: string;
        star: number;
    })[]>;
    findOne(id: string): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
        text: string;
        star: number;
    }>;
    update(id: string, userId: string, data: UpdateCommentDto): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
        text: string;
        star: number;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
        text: string;
        star: number;
    }>;
}
