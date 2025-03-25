import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateChatDto } from "./dto/create-chat.dto";

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async createChat(dto: CreateChatDto) {
    return await this.prisma.chat.create({ data: dto });
  }

  async getUserChats(userId: string) {
    return await this.prisma.chat.findMany({
      where: { OR: [{ fromId: userId }, { toId: userId }] },
      orderBy: { date: "asc" },
    });
  }
}
