import { Injectable, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateColorDto } from "./dto/create-color.dto";
import { UpdateColorDto } from "./dto/update-color.dto";

@Injectable()
export class ColorService {
  constructor(private prisma: PrismaService) {}

  async create(createColorDto: CreateColorDto) {
    try {
      return await this.prisma.color.create({ data: createColorDto });
    } catch (error) {
      throw new InternalServerErrorException("Rang yaratishda xatolik yuz berdi.");
    }
  }

  async findAll() {
    return await this.prisma.color.findMany();
  }

  async findOne(id: string) {
    const color = await this.prisma.color.findUnique({ where: { id } });
    if (!color) {
      throw new NotFoundException("Bunday rang topilmadi.");
    }
    return color;
  }

  async update(id: string, updateColorDto: UpdateColorDto) {
    await this.findOne(id);
    try {
      return await this.prisma.color.update({
        where: { id },
        data: updateColorDto,
      });
    } catch (error) {
      throw new InternalServerErrorException("Rangni yangilashda xatolik yuz berdi.");
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      return await this.prisma.color.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException("Rangni o‘chirishda xatolik yuz berdi.");
    }
  }
}
