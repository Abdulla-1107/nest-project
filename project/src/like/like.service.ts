import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LikeService {
  constructor(private prisma: PrismaService) {}

  async likeProduct(userId: string, productId: string) {
    const product = await this.prisma.product.findUnique({ where: { id: productId } });
    if (!product) throw new NotFoundException("Mahsulot topilmadi");

    const existingLike = await this.prisma.like.findFirst({
      where: { userId, productId },
    });

    if (existingLike) throw new BadRequestException("Siz bu mahsulotni allaqachon like qilgansiz");

    return await this.prisma.like.create({
      data: { userId, productId },
    });
  }

  async unlikeProduct(userId: string, productId: string) {
    const like = await this.prisma.like.findFirst({
      where: { userId, productId },
    });

    if (!like) throw new NotFoundException("Siz bu mahsulotni like qilmagansiz");

    return await this.prisma.like.delete({
      where: { id: like.id },
    });
  }

  async getUserLikes(userId: string) {
    return await this.prisma.like.findMany({
      where: { userId },
      include: { product: true }, 
    });
  }
}
