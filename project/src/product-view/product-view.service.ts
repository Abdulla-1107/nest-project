import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProductViewService {
  constructor(private prisma: PrismaService) {}
  async getProductViewCount(productId: string) {
    try {
      const views = await this.prisma.productView.aggregate({
        _sum: {
          count: true, // ✅ To‘g‘ri ishlashi uchun mavjud maydonni aniq berish
        },
        where: {
          productId: productId,
        },
      });

      return { productId, viewCount: views._sum?.count || 0 };
    } catch (error) {
      throw new InternalServerErrorException(
        "Mahsulot ko‘rishlar sonini olishda xatolik yuz berdi."
      );
    }
  }

  async addView(userId: string, productId: string) {
    try {
      const existingView = await this.prisma.productView.findUnique({
        where: {
          userId_productId: { userId, productId },
        },
      });

      if (!existingView) {
        // ❗ Foydalanuvchi birinchi marta ko‘rsa, yangi yozuv qo‘shamiz
        return await this.prisma.productView.create({
          data: { userId, productId, count: 1 },
        });
      }

      // ❗ Agar foydalanuvchi allaqachon ko‘rgan bo‘lsa, xabar qaytaramiz
      return { message: "Bu foydalanuvchi allaqachon mahsulotni ko‘rgan." };
    } catch (error) {
      throw new InternalServerErrorException(
        "Mahsulotni ko‘rish jarayonida xatolik yuz berdi."
      );
    }
  }
}
