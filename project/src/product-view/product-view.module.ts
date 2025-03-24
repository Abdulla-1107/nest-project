import { Module } from "@nestjs/common";
import { ProductViewService } from "./product-view.service";
import { ProductViewController } from "./product-view.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [ProductViewController],
  providers: [ProductViewService],
})
export class ProductViewModule {}
