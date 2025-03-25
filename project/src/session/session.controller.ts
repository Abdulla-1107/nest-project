import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { SessionService } from "./session.service";
import { CreateSessionDto } from "./dto/create-session.dto";
import { UpdateSessionDto } from "./dto/update-session.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { Role } from "src/decorators/role.decorators";
import { Roles } from "src/enums/role.enum";
import { RoleGuard } from "src/guards/role.guard";

@ApiTags("Sessions")
@Role(Roles.ADMIN)
@UseGuards(RoleGuard)
@UseGuards(AuthGuard)
@Controller("session")
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @ApiOperation({ summary: "Barcha sessiyalarni olish" })
  @ApiResponse({ status: 200, description: "Barcha sessiyalar ro‘yxati" })
  @Get()
  findAll() {
    return this.sessionService.findAll();
  }

  @ApiOperation({ summary: "Sessiyani o‘chirish" })
  @ApiResponse({
    status: 200,
    description: "Sessiya muvaffaqiyatli o‘chirildi",
  })
  @ApiResponse({ status: 404, description: "Sessiya topilmadi" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.sessionService.remove(id);
  }
}
