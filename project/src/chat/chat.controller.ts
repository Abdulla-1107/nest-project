import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { ChatService } from "./chat.service";
import { CreateChatDto } from "./dto/create-chat.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { AuthGuard } from "src/guards/auth.guard";
import { Role } from "src/decorators/role.decorators";
import { Roles } from "src/enums/role.enum";

@ApiTags("Chat")
@ApiBearerAuth()
@Controller("chat")
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: "Yangi chat xabarini yaratish (Token talab qilinadi)",
  })
  @ApiResponse({ status: 201, description: "Xabar muvaffaqiyatli yaratildi" })
  @ApiResponse({ status: 400, description: "Xatolik: noto‘g‘ri ma’lumot" })
  @ApiResponse({ status: 401, description: "Token noto‘g‘ri yoki mavjud emas" })
  async createChat(@Request() req, @Body() dto: CreateChatDto) {
    const fromId = req["user"].id;
    return this.chatService.createChat({ ...dto, fromId });
  }

  @Get(":userId")
  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      "Foydalanuvchining barcha xabarlarini olish (Token talab qilinadi)",
  })
  @ApiResponse({ status: 200, description: "Muvaffaqiyatli" })
  @ApiResponse({ status: 401, description: "Token noto‘g‘ri yoki mavjud emas" })
  async getUserChats(@Request() req, @Param("userId") userId: string) {
    return this.chatService.getUserChats(userId);
  }
}
