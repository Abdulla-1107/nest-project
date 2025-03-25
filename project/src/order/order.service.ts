import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { OrderGateway } from "./order.gateway";

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private orderGateway: OrderGateway
  ) {}

  async create(userId: string, data: CreateOrderDto) {
    try {
      const product = await this.prisma.product.findUnique({
        where: { id: data.productId },
      });

      if (!product) throw new NotFoundException("Mahsulot topilmadi");
      if (product.finalPrice == null)
        throw new InternalServerErrorException("Mahsulot narxi mavjud emas.");

      const summa = Number(product.finalPrice) * data.count;

      const order = await this.prisma.order.create({
        data: {
          ...data,
          userId,
          summa,
        },
      });

      this.orderGateway.sendOrderNotification({
        message: `Yangi buyurtma yaratildi! ID: ${order.id}`,
        order,
      });

      return order;
    } catch (error) {
      throw new InternalServerErrorException(
        "Buyurtma yaratishda xatolik yuz berdi."
      );
    }
  }
  async findAll(userId: string) {
    try {
      return await this.prisma.order.findMany({
        where: { userId },
        include: { product: true },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        "Buyurtmalarni olishda xatolik yuz berdi."
      );
    }
  }

  async findOne(id: string, userId: string) {
    try {
      const order = await this.prisma.order.findUnique({ where: { id } });
      if (!order || order.userId != userId)
        throw new NotFoundException("Buyurtma topilmadi.");
      return order;
    } catch (error) {
      throw new InternalServerErrorException(
        "Buyurtmani olishda xatolik yuz berdi."
      );
    }
  }

  async update(id: string, userId: string, data: UpdateOrderDto) {
    try {
      const existingOrder = await this.findOne(id, userId);

      if (data.count !== undefined) {
        const product = await this.prisma.product.findUnique({
          where: { id: existingOrder.productId },
        });
        if (!product) throw new NotFoundException("Mahsulot topilmadi");

        if (product.finalPrice == null)
          throw new InternalServerErrorException("Mahsulot narxi mavjud emas.");

        const summa = Number(product.finalPrice) * data.count;

        return await this.prisma.order.update({
          where: { id },
          data: { ...data, summa } as any,
        });
      }

      return await this.prisma.order.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        "Buyurtmani yangilashda xatolik yuz berdi."
      );
    }
  }

  async remove(id: string, userId: string) {
    try {
      const existingOrder = await this.findOne(id, userId);
      return await this.prisma.order.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(
        "Buyurtmani o‘chirishda xatolik yuz berdi."
      );
    }
  }
}
