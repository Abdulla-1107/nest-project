import { Server } from "socket.io";
export declare class OrderGateway {
    server: Server;
    sendOrderNotification(ownerId: string, order: any): void;
}
