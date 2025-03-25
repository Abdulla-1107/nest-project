import { PrismaService } from "src/prisma/prisma.service";
import { CreateChatDto } from "./dto/create-chat.dto";
export declare class ChatService {
    private prisma;
    constructor(prisma: PrismaService);
    createChat(dto: CreateChatDto): Promise<{
        id: string;
        date: Date;
        productId: string | null;
        text: string;
        fromId: string;
        toId: string;
    }>;
    getUserChats(userId: string): Promise<{
        id: string;
        date: Date;
        productId: string | null;
        text: string;
        fromId: string;
        toId: string;
    }[]>;
}
