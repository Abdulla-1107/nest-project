import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateSessionDto } from "./dto/create-session.dto";
import { UpdateSessionDto } from "./dto/update-session.dto";

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.session.findMany({
      include: {
        user: {
          select: { lastName: true, firstName: true },
        },
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.session.delete({
      where: { id },
    });
  }
}
