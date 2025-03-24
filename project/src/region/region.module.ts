import { Module } from "@nestjs/common";
import { RegionService } from "./region.service";
import { RegionController } from "./region.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [ConfigModule, JwtModule],
  controllers: [RegionController],
  providers: [RegionService, PrismaService],
})
export class RegionModule {}
