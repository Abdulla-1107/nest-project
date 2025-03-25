import { ChatService } from "./chat.service";
import { CreateChatDto } from "./dto/create-chat.dto";
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createChat(req: any, dto: CreateChatDto): Promise<{
        id: string;
        date: Date;
        productId: string | null;
        text: string;
        fromId: string;
        toId: string;
    }>;
    getUserChats(req: any, userId: string): Promise<{
        id: string;
        date: Date;
        productId: string | null;
        text: string;
        fromId: string;
        toId: string;
    }[]>;
}
