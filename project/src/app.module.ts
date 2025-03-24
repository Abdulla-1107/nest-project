import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from './prisma/prisma.service';
import { RegionModule } from './region/region.module';
import { SessionModule } from './session/session.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { LikeModule } from './like/like.module';
import { CommentModule } from './comment/comment.module';
import { OrderModule } from './order/order.module';
import { ProductViewModule } from './product-view/product-view.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot(), RegionModule, SessionModule, PrismaModule, ProductModule, CategoryModule, LikeModule, CommentModule, OrderModule, ProductViewModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
