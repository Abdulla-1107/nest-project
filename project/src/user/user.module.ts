import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: "token",
      signOptions: { expiresIn: "1h" },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [JwtModule],
})
export class UserModule {}
