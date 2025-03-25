import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateColorItemDto } from "./dto/create-color-item.dto";

@Injectable()
export class ColorItemService {
  constructor(private prisma: PrismaService) {}

  // ✅ Rang va mahsulot bog‘lanishini yaratish
  async create(dto: CreateColorItemDto) {
    try {
      return await this.prisma.colorItem.create({ data: dto });
    } catch (error) {
      throw new BadRequestException("Rang va mahsulot bog‘lanishini yaratib bo‘lmadi.");
    }
  }

  // ✅ Barcha bog‘lanishlarni olish
  async findAll() {
    try {
      return await this.prisma.colorItem.findMany({
        include: { product: true, color: true },
      });
    } catch (error) {
      throw new BadRequestException("Bog‘lanishlarni olishda xatolik yuz berdi.");
    }
  }

  // ✅ ID bo‘yicha bog‘lanishni olish
  async findOne(id: string) {
    try {
      const colorItem = await this.prisma.colorItem.findUnique({ where: { id } });
      if (!colorItem) throw new NotFoundException("Bog‘lanish topilmadi.");
      return colorItem;
    } catch (error) {
      throw new BadRequestException("Bog‘lanishni olishda xatolik yuz berdi.");
    }
  }

  // ✅ Bog‘lanishni o‘chirish
  async remove(id: string) {
    try {
      const deleted = await this.prisma.colorItem.delete({ where: { id } });
      return { message: "Bog‘lanish muvaffaqiyatli o‘chirildi.", deleted };
    } catch (error) {
      throw new BadRequestException("Bog‘lanishni o‘chirib bo‘lmadi.");
    }
  }
}
