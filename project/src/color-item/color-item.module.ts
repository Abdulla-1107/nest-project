import { Module } from "@nestjs/common";
import { ColorItemService } from "./color-item.service";
import { ColorItemController } from "./color-item.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [ColorItemController],
  providers: [ColorItemService],
  exports: [ColorItemService],
})
export class ColorItemModule {}
