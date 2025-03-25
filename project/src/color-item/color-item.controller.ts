import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { ColorItemService } from "./color-item.service";
import { CreateColorItemDto } from "./dto/create-color-item.dto";
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags("Color Items")
@Controller("color-items")
export class ColorItemController {
  constructor(private readonly colorItemService: ColorItemService) {}

  @Post()
  @ApiOperation({ summary: "Mahsulotga rang qo‘shish" })
  create(@Body() dto: CreateColorItemDto) {
    return this.colorItemService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha rang-masulot bog‘lanishlarini olish" })
  findAll() {
    return this.colorItemService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta rang-masulot bog‘lanishini olish" })
  findOne(@Param("id") id: string) {
    return this.colorItemService.findOne(id);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Rang-masulot bog‘lanishini o‘chirish" })
  remove(@Param("id") id: string) {
    return this.colorItemService.remove(id);
  }
}
