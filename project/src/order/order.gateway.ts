import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({ cors: true })
export class OrderGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  private server: Server;

  private users = new Map<string, string>(); 

  handleConnection(client: Socket) {
    const userId = client.handshake.auth.userId; 
    if (userId) {
      this.users.set(userId, client.id); 
      console.log(`User ${userId} connected with socket ${client.id}`);
    }
  }

  handleDisconnect(client: Socket) {
    const userId = [...this.users.entries()].find(([_, socketId]) => socketId === client.id)?.[0];
    if (userId) {
      this.users.delete(userId);
      console.log(`User ${userId} disconnected`);
    }
  }

  @SubscribeMessage("sendOrderNotification")
  sendOrderNotification(@MessageBody() data: { userId: string; message: string; order?: any }) {
    const socketId = this.users.get(data.userId);
    if (socketId) {
      this.server.to(socketId).emit("receiveOrderNotification", data);
      console.log(`Notification sent to user ${data.userId}`);
    } else {
      console.log(`User ${data.userId} is not connected`);
    }
  }
}
