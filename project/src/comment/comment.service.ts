import { Injectable, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, data: CreateCommentDto) {
    try {
      return await this.prisma.comment.create({
        data: {
          ...data,
          userId,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException("comment qo‘shishda xatolik yuz berdi.");
    }
  }

  async findAll(productId: string) {
    try {
      return await this.prisma.comment.findMany({
        where: { productId },
        include: { user: true },
      });
    } catch (error) {
      throw new InternalServerErrorException("commentlarni olishda xatolik yuz berdi.");
    }
  }

  async findOne(id: string) {
    try {
      const comment = await this.prisma.comment.findUnique({ where: { id } });
      if (!comment) throw new NotFoundException("comment topilmadi.");
      return comment;
    } catch (error) {
      throw new InternalServerErrorException("commentni olishda xatolik yuz berdi.");
    }
  }

  async update(id: string, userId: string, data: UpdateCommentDto) {
    try {
      const existingComment = await this.findOne(id);
      if (existingComment.userId != userId) {
        throw new NotFoundException("Bu commentni o‘zgartirish huquqiga ega emassiz.");
      }

      return await this.prisma.comment.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new InternalServerErrorException("commentni yangilashda xatolik yuz berdi.");
    }
  }

  async remove(id: string, userId: string) {
    try {
      const existingComment = await this.findOne(id);
      if (existingComment.userId != userId) {
        throw new NotFoundException("Bu commentni o‘chirish huquqiga ega emassiz.");
      }

      return await this.prisma.comment.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException("commentni o‘chirishda xatolik yuz berdi.");
    }
  }
}
