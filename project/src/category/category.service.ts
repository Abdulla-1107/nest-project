import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCategoryDto) {
    try {
      const { name } = data;
      let category = await this.prisma.category.findFirst({ where: { name } });
      if (category) {
        throw new ConflictException("Bunday category mavjud");
      }
      return await this.prisma.category.create({ data });
    } catch (error) {
      throw new BadRequestException("Kategoriya yaratishda xatolik yuz berdi");
    }
  }

  async findAll() {
    try {
      return await this.prisma.category.findMany();
    } catch (error) {
      throw new BadRequestException(
        "Kategoriyalarni olishda xatolik yuz berdi"
      );
    }
  }

  async findOne(id: string) {
    try {
      const category = await this.prisma.category.findUnique({ where: { id } });
      if (!category) throw new NotFoundException("Kategoriya topilmadi");
      return category;
    } catch (error) {
      throw new BadRequestException(
        "Kategoriya ma'lumotlarini olishda xatolik yuz berdi"
      );
    }
  }

  async update(id: string, data: UpdateCategoryDto) {
    try {
      await this.findOne(id);
      return await this.prisma.category.update({ where: { id }, data });
    } catch (error) {
      throw new BadRequestException("Categoriya topilmadi");
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      return await this.prisma.category.delete({ where: { id } });
    } catch (error) {
      throw new BadRequestException("Categoriya topilmadi");
    }
  }
}
