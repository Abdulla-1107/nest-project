import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
export declare class OrderGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private server;
    private users;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    sendOrderNotification(data: {
        userId: string;
        message: string;
        order?: any;
    }): void;
}
