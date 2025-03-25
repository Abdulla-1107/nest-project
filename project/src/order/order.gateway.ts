import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway({ cors: true })
export class OrderGateway {
  @WebSocketServer()
  server: Server;

  sendOrderNotification(ownerId: string, order: any) {
    this.server.to(ownerId).emit("newOrder", {
      message: "Sizning mahsulotingizga buyurtma berildi!",
      order,
    });
  }
}
