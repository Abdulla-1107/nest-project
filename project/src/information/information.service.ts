import { Injectable, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateInformationDto } from "./dto/create-information.dto";
import { UpdateInformationDto } from "./dto/update-information.dto";

@Injectable()
export class InformationService {
  constructor(private prisma: PrismaService) {}

  async getInformation() {
    const info = await this.prisma.information.findFirst();
    if (!info) {
      throw new NotFoundException("Ma'lumot topilmadi");
    }
    return info;
  }

  async createInformation(dto: CreateInformationDto) {
    const existingInfo = await this.prisma.information.findFirst();
    if (existingInfo) {
      throw new InternalServerErrorException("Ma'lumot allaqachon mavjud");
    }
    return await this.prisma.information.create({ data: dto });
  }

  async updateInformation(dto: UpdateInformationDto) {
    const info = await this.prisma.information.findFirst();
    if (!info) {
      throw new NotFoundException("Ma'lumot topilmadi");
    }
    try {
      return await this.prisma.information.update({
        where: { id: info.id },
        data: dto,
      });
    } catch (error) {
      throw new InternalServerErrorException("Yangilashda xatolik yuz berdi");
    }
  }
}
