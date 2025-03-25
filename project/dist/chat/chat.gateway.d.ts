import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { ChatService } from "./chat.service";
import { CreateChatDto } from "./dto/create-chat.dto";
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly chatService;
    server: Server;
    private logger;
    constructor(chatService: ChatService);
    handleJoin(userId: string, client: Socket): void;
    handleMessage(createChatDto: CreateChatDto, client: Socket): Promise<{
        id: string;
        date: Date;
        productId: string | null;
        text: string;
        fromId: string;
        toId: string;
    }>;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket): void;
}
