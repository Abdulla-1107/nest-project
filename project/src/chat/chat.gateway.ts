import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { ChatService } from "./chat.service";
import { CreateChatDto } from "./dto/create-chat.dto";
import { Logger } from "@nestjs/common";

@WebSocketGateway({ cors: { origin: "*" } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private logger = new Logger("ChatGateway");

  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage("join")
  handleJoin(
    @MessageBody("userId") userId: string,
    @ConnectedSocket() client: Socket
  ) {
    client.join(userId);
    this.logger.log(`Foydalanuvchi qo‘shildi: ${userId}`);
  }

  @SubscribeMessage("sendMessage")
  async handleMessage(
    @MessageBody() createChatDto: CreateChatDto,
    @ConnectedSocket() client: Socket
  ) {
    const chat = await this.chatService.createChat(createChatDto);

    this.server.to(createChatDto.toId).emit("receiveMessage", chat);
    this.server.to(createChatDto.fromId).emit("receiveMessage", chat);

    return chat;
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Foydalanuvchi uzildi: ${client.id}`);
  }

  handleConnection(client: Socket) {
    this.logger.log(`Foydalanuvchi ulandi: ${client.id}`);
  }
}
