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
import { ColorService } from "./color.service";
import { CreateColorDto } from "./dto/create-color.dto";
import { UpdateColorDto } from "./dto/update-color.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { Role } from "src/decorators/role.decorators";
import { Roles } from "src/enums/role.enum";
import { AuthGuard } from "src/guards/auth.guard";

@ApiTags("Colors")
@ApiBearerAuth()
@Controller("colors")
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @ApiOperation({ summary: "Yangi rang qo'shish" })
  @ApiResponse({ status: 201, description: "Rang muvaffaqiyatli yaratildi." })
  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createColorDto: CreateColorDto) {
    return this.colorService.create(createColorDto);
  }

  @ApiOperation({ summary: "Barcha ranglarni olish" })
  @ApiResponse({ status: 200, description: "Ranglar ro‘yxati" })
  @Get()
  findAll() {
    return this.colorService.findAll();
  }

  @ApiOperation({ summary: "Bitta rangni ID orqali olish" })
  @ApiResponse({ status: 200, description: "Topilgan rang" })
  @ApiResponse({ status: 404, description: "Bunday rang topilmadi" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.colorService.findOne(id);
  }

  @ApiOperation({ summary: "Rangni yangilash" })
  @ApiResponse({ status: 200, description: "Rang muvaffaqiyatli yangilandi" })
  @ApiResponse({ status: 404, description: "Bunday rang topilmadi" })
  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateColorDto: UpdateColorDto) {
    return this.colorService.update(id, updateColorDto);
  }

  @ApiOperation({ summary: "Rangni o‘chirish" })
  @ApiResponse({ status: 200, description: "Rang muvaffaqiyatli o‘chirildi" })
  @ApiResponse({ status: 404, description: "Bunday rang topilmadi" })
  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.colorService.remove(id);
  }
}
