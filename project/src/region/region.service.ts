import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service"; // PrismaService import qilamiz
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";

@Injectable()
export class RegionService {
  constructor(private prisma: PrismaService) {} 

  async create(createRegionDto: CreateRegionDto) {
    try {
      return await this.prisma.region.create({ data: createRegionDto });
    } catch (error) {
      throw new BadRequestException("Region yaratishda xatolik yuz berdi.");
    }
  }

  async findAll() {
    try {
      return await this.prisma.region.findMany({
        include: {
          users: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      });
    } catch (error) {
      throw new BadRequestException("Regionlarni olishda xatolik yuz berdi.");
    }
  }

  async findOne(id: string) {
    try {
      const region = await this.prisma.region.findUnique({
        where: { id },
        include: {
          users: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      });

      if (!region) {
        throw new NotFoundException(`Region ${id} topilmadi.`);
      }

      return region;
    } catch (error) {
      throw new BadRequestException("Regionni olishda xatolik yuz berdi.");
    }
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    try {
      const region = await this.prisma.region.update({
        where: { id },
        data: updateRegionDto,
      });

      return region;
    } catch (error) {
      throw new NotFoundException(
        `Region ${id} yangilashda xatolik yuz berdi.`
      );
    }
  }

  async remove(id: string) {
    try {
      const deletedRegion = await this.prisma.region.delete({
        where: { id },
      });

      return { message: "Region muvaffaqiyatli o'chirildi", deletedRegion };
    } catch (error) {
      throw new NotFoundException(
        `Region ${id} o'chirishda xatolik yuz berdi.`
      );
    }
  }
}
