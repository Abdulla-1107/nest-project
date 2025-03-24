import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 🔥 Shuni qo‘shish kerak!
})
export class PrismaModule {}
