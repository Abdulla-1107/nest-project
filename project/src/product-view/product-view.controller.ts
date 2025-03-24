import { Controller, Get, Param, Request } from "@nestjs/common";
import { ProductViewService } from "./product-view.service";
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";

@ApiTags("Mahsulot ko‘rishlar") // 📌 Swagger kategoriyasi
@Controller("product-view")
export class ProductViewController {
  constructor(private readonly productViewService: ProductViewService) {}

  @ApiOperation({ summary: "Mahsulotni foydalanuvchi tomonidan ko‘rish" })
  @ApiParam({ name: "productId", type: String, description: "Mahsulot ID" })
  @ApiResponse({ status: 200, description: "Foydalanuvchi mahsulotni ko‘rdi" })
  @ApiResponse({ status: 400, description: "Foydalanuvchi aniqlanmadi" })
  @Get(":productId")
  async viewProduct(@Request() req, @Param("productId") productId: string) {
    const userId = req.user?.id; // ✅ `req.user.id` bo‘lishi kerak
    if (!userId) return { message: "Foydalanuvchi aniqlanmadi" };

    return this.productViewService.addView(userId, productId);
  }

  @ApiOperation({ summary: "Mahsulot umumiy necha marta ko‘rilganligini olish" })
  @ApiParam({ name: "productId", type: String, description: "Mahsulot ID" })
  @ApiResponse({ status: 200, description: "Mahsulot ko‘rishlar soni" })
  @Get("count/:productId")
  async getProductViewCount(@Param("productId") productId: string) {
    return this.productViewService.getProductViewCount(productId);
  }
}
