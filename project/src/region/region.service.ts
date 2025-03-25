import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";

@Injectable()
export class RegionService {
  constructor(private prisma: PrismaService) {}

  async create(createRegionDto: CreateRegionDto) {
    try {
      const { name } = createRegionDto;
      let checkRegion = await this.prisma.region.findFirst({ where: { name } });
      if (checkRegion) {
        throw new ConflictException("Bunday Region mavjud");
      }
      return await this.prisma.region.create({ data: createRegionDto });
    } catch (error) {
      console.log(error.message);
      throw new BadRequestException(error.message);
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
        throw new NotFoundException(`Region topilmadi.`);
      }

      return region;
    } catch (error) {
      throw new BadRequestException(error.message);
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
      throw new NotFoundException(`Region Topilmadi.`);
    }
  }

  async remove(id: string) {
    try {
      const deletedRegion = await this.prisma.region.delete({
        where: { id },
      });

      return { message: "Region muvaffaqiyatli o'chirildi", deletedRegion };
    } catch (error) {
      throw new NotFoundException(`Region topilmadi`);
    }
  }
}
