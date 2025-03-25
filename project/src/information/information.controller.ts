import { Controller, Get, Post, Patch, Body, UseGuards } from "@nestjs/common";
import { InformationService } from "./information.service";
import { CreateInformationDto } from "./dto/create-information.dto";
import { UpdateInformationDto } from "./dto/update-information.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { Role } from "src/decorators/role.decorators";
import { Roles } from "src/enums/role.enum";
import { AuthGuard } from "src/guards/auth.guard";
import { RoleGuard } from "src/guards/role.guard";

@ApiTags("Information")
@ApiBearerAuth()
@Controller("information")
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @ApiOperation({ summary: "Sayt haqida ma'lumotni olish" })
  @ApiResponse({ status: 200, description: "Ma'lumot topildi" })
  @Get()
  getInformation() {
    return this.informationService.getInformation();
  }

  @ApiOperation({ summary: "Sayt haqida yangi ma'lumot qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Ma'lumot muvaffaqiyatli qo'shildi",
  })
  @Role(Roles.ADMIN)
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Post()
  createInformation(@Body() createInformationDto: CreateInformationDto) {
    return this.informationService.createInformation(createInformationDto);
  }

  @ApiOperation({ summary: "Sayt ma'lumotlarini yangilash" })
  @ApiResponse({
    status: 200,
    description: "Ma'lumot muvaffaqiyatli yangilandi",
  })
  @Role(Roles.ADMIN)
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Patch()
  updateInformation(@Body() updateInformationDto: UpdateInformationDto) {
    return this.informationService.updateInformation(updateInformationDto);
  }
}
