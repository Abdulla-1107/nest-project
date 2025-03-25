import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, data: CreateProductDto) {
    const { categoryId } = data;

    if (categoryId) {
      const category = await this.prisma.category.findFirst({
        where: { id: categoryId },
      });

      if (!category) {
        throw new NotFoundException("Kategoriya topilmadi");
      }
      const { price, discountPercentage = 0, discountAmount = 0 } = data;
      const finalPrice =
        price - price * (discountPercentage / 100) - discountAmount;

      console.log(userId);
      return this.prisma.product.create({
        data: { ...data, userId, finalPrice },
      });
    }
  }
  async findAll(
    page: number,
    limit: number,
    search: string,
    categoryId: string
  ) {
    return this.prisma.product.findMany({
      where: {
        name: { contains: search, mode: "insensitive" },
        ...(categoryId && { categoryId }),
      },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException("Mahsulot topilmadi");
    return product;
  }

  async update(id: string, userId: string, data: UpdateProductDto) {
    const product = await this.findOne(id);

    if (product.userId != userId) {
      throw new ForbiddenException(
        "Siz faqat o'zingiz yaratgan mahsulotni yangilashingiz mumkin"
      );
    }

    if (
      data.price != undefined ||
      data.discountPercentage != undefined ||
      data.discountAmount != undefined
    ) {
      const price = Number(data.price ?? product.price);
      const discountPercentage = Number(data.discountPercentage ?? 0);
      const discountAmount = Number(data.discountAmount ?? 0);

      data.finalPrice =
        price - price * (discountPercentage / 100) - discountAmount;
    }

    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async remove(id: string, userId: string) {
    const product = await this.findOne(id);

    if (product.userId != userId) {
      throw new ForbiddenException(
        "Siz faqat o'zingiz yaratgan mahsulotni o'chirishingiz mumkin"
      );
    }

    return this.prisma.product.delete({ where: { id } });
  }
}
