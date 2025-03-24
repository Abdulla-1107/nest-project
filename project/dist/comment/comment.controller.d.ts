import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Request } from "express";
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(req: Request, data: CreateCommentDto): Promise<{
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
            firstName: string;
            lastName: string;
            image: string;
            phone: string;
            password: string;
            regionId: string | null;
            role: import(".prisma/client").$Enums.Role;
            id: string;
            status: import(".prisma/client").$Enums.Status;
            wasOnline: Date;
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
    update(id: string, req: Request, data: UpdateCommentDto): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
        text: string;
        star: number;
    }>;
    remove(id: string, req: Request): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        productId: string;
        text: string;
        star: number;
    }>;
}
