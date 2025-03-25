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
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { Role } from "src/decorators/role.decorators";
import { Roles } from "src/enums/role.enum";
import { AuthGuard } from "src/guards/auth.guard";
import { RoleGuard } from "src/guards/role.guard";

@ApiTags("Categories")
@ApiBearerAuth()
@Controller("categories")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Role(Roles.ADMIN)
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: "Yangi kategoriya qo‘shish" })
  async create(@Body() data: CreateCategoryDto) {
    return await this.categoryService.create(data);
  }

  @Get()
  @ApiOperation({ summary: "Barcha kategoriyalarni olish" })
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta kategoriyani olish" })
  @ApiParam({
    name: "id",
    example: "123e4567-e89b-12d3-a456-426614174000",
    description: "Kategoriya ID si",
  })
  async findOne(@Param("id") id: string) {
    return await this.categoryService.findOne(id);
  }

  @Role(Roles.ADMIN)
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Patch(":id")
  @ApiOperation({ summary: "Kategoriyani yangilash" })
  @ApiParam({
    name: "id",
    example: "123e4567-e89b-12d3-a456-426614174000",
    description: "Kategoriya ID si",
  })
  @ApiBody({ type: UpdateCategoryDto })
  async update(@Param("id") id: string, @Body() data: UpdateCategoryDto) {
    return await this.categoryService.update(id, data);
  }

  @Role(Roles.ADMIN)
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Delete(":id")
  @ApiOperation({ summary: "Kategoriyani o‘chirish" })
  @ApiParam({
    name: "id",
    example: "123e4567-e89b-12d3-a456-426614174000",
    description: "Kategoriya ID si",
  })
  async remove(@Param("id") id: string) {
    return await this.categoryService.remove(id);
  }
}
