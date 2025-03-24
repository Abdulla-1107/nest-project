import { Controller, Post, Delete, Get, Param, Req, UseGuards } from "@nestjs/common";
import { LikeService } from "./like.service";
import { Request } from "express";
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "src/guards/auth.guard";

@ApiTags("Likes")
@ApiBearerAuth()
@Controller("likes")
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post(":productId")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Mahsulotni like qilish" })
  @ApiParam({ name: "productId", example: "987e6543-e89b-12d3-a456-426614174999", description: "Mahsulot ID" })
  async likeProduct(@Req() req: Request, @Param("productId") productId: string) {
    const userId = req["user"].id;
    return await this.likeService.likeProduct(userId, productId);
  }

  @Delete(":productId")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Mahsulotni unlike qilish" })
  @ApiParam({ name: "productId", example: "987e6543-e89b-12d3-a456-426614174999", description: "Mahsulot ID" })
  async unlikeProduct(@Req() req: Request, @Param("productId") productId: string) {
    const userId = req["user"].id;
    return await this.likeService.unlikeProduct(userId, productId);
  }

  @Get("my-likes")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Foydalanuvchining like qilgan mahsulotlarini olish" })
  async getUserLikes(@Req() req: Request) {
    const userId = req["user"].id;
    return await this.likeService.getUserLikes(userId);
  }
}
