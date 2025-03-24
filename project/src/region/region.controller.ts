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
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { RegionService } from "./region.service";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { Roles } from "src/enums/role.enum";
import { Role } from "src/decorators/role.decorators";
import { AuthGuard } from "src/guards/auth.guard";

@ApiTags("Regions")
@ApiBearerAuth()
@Controller("region")
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: "Yangi region qo'shish" }) 
  @ApiResponse({ status: 201, description: "Region muvaffaqiyatli yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumot" })
  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: "Barcha regionlarni olish" })
  @ApiResponse({ status: 200, description: "Regionlar ro'yxati" })
  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: "Bitta regionni olish" })
  @ApiResponse({ status: 200, description: "Region topildi" })
  @ApiResponse({ status: 404, description: "Region topilmadi" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.regionService.findOne(id);
  }

  @ApiOperation({ summary: "Regionni yangilash" })
  @ApiResponse({ status: 200, description: "Region muvaffaqiyatli yangilandi" })
  @ApiResponse({ status: 404, description: "Region topilmadi" })
  @Role(Roles.ADMIN)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(id, updateRegionDto);
  }

  @ApiOperation({ summary: "Regionni o‘chirish" })
  @ApiResponse({ status: 200, description: "Region muvaffaqiyatli o‘chirildi" })
  @ApiResponse({ status: 404, description: "Region topilmadi" })
  @Role(Roles.ADMIN)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.regionService.remove(id);
  }
}
