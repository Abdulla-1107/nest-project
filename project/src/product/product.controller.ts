import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { Request } from "express";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiBody,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { AuthGuard } from "src/guards/auth.guard";

@ApiTags("Products")
@ApiBearerAuth()
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Yangi mahsulot qo‘shish" })
  async create(@Req() req: Request, @Body() data: CreateProductDto) {
    const userId = req["user"].id;
    return await this.productService.create({ ...data, userId });
  }

  @Get()
  @ApiOperation({ summary: "Barcha mahsulotlarni olish" })
  @ApiQuery({
    name: "page",
    required: false,
    example: 1,
    description: "Sahifa raqami",
  })
  @ApiQuery({
    name: "limit",
    required: false,
    example: 10,
    description: "Bir sahifadagi mahsulotlar soni",
  })
  @ApiQuery({
    name: "search",
    required: false,
    example: "iPhone",
    description: "Qidiruv bo‘yicha filter",
  })
  @ApiQuery({
    name: "categoryId",
    required: false,
    example: "123e4567",
    description: "Kategoriya ID si",
  })
  async findAll(
    @Query("page") page: string,
    @Query("limit") limit: string,
    @Query("search") search: string,
    @Query("categoryId") categoryId: string
  ) {
    const pageNumber = Math.max(parseInt(page) || 1, 1);
    const limitNumber = Math.max(parseInt(limit) || 10, 1);
    return await this.productService.findAll(
      pageNumber,
      limitNumber,
      search || "",
      categoryId || ""
    );
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta mahsulotni olish" })
  @ApiParam({
    name: "id",
    example: "987e6543-e89b-12d3-a456-426614174999",
    description: "Mahsulot ID si",
  })
  async findOne(@Param("id") id: string) {
    return await this.productService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Mahsulotni yangilash (faqat egasi)" })
  @ApiParam({
    name: "id",
    example: "987e6543-e89b-12d3-a456-426614174999",
    description: "Mahsulot ID si",
  })
  @ApiBody({ type: UpdateProductDto })
  async update(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() data: UpdateProductDto
  ) {
    const userId = req["user"].id;
    return await this.productService.update(id, userId, data);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Mahsulotni o‘chirish (faqat egasi)" })
  @ApiParam({
    name: "id",
    example: "987e6543-e89b-12d3-a456-426614174999",
    description: "Mahsulot ID si",
  })
  async remove(@Req() req: Request, @Param("id") id: string) {
    const userId = req["user"].id;
    return await this.productService.remove(id, userId);
  }
}
