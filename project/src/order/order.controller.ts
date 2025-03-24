import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Request } from "express";
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { AuthGuard } from "src/guards/auth.guard";

@ApiTags("Orders")
@ApiBearerAuth()
@Controller("orders")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Yangi buyurtma qo‘shish" })
  async create(@Req() req: Request, @Body() data: CreateOrderDto) {
    const userId = req["user"].id;
    return await this.orderService.create(userId, data);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Foydalanuvchining barcha buyurtmalarini olish" })
  async findAll(@Req() req: Request) {
    const userId = req["user"].id;
    return await this.orderService.findAll(userId);
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Bitta buyurtmani olish" })
  @ApiParam({
    name: "id",
    example: "987e6543-e89b-12d3-a456-426614174999",
    description: "Buyurtma ID si",
  })
  async findOne(@Param("id") id: string, @Req() req: Request) {
    const userId = req["user"].id;
    return await this.orderService.findOne(id, userId);
  }

  @Patch(":id")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Buyurtmani yangilash" })
  async update(
    @Param("id") id: string,
    @Req() req: Request,
    @Body() data: UpdateOrderDto
  ) {
    const userId = req["user"].id;
    return await this.orderService.update(id, userId, data);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Buyurtmani o‘chirish" })
  async remove(@Param("id") id: string, @Req() req: Request) {
    const userId = req["user"].id;
    return await this.orderService.remove(id, userId);
  }
}
