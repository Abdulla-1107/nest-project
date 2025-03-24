"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductViewService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductViewService = class ProductViewService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProductViewCount(productId) {
        try {
            const views = await this.prisma.productView.aggregate({
                _sum: {
                    count: true,
                },
                where: {
                    productId: productId,
                },
            });
            return { productId, viewCount: views._sum?.count || 0 };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Mahsulot ko‘rishlar sonini olishda xatolik yuz berdi.");
        }
    }
    async addView(userId, productId) {
        try {
            const existingView = await this.prisma.productView.findUnique({
                where: {
                    userId_productId: { userId, productId },
                },
            });
            if (!existingView) {
                return await this.prisma.productView.create({
                    data: { userId, productId, count: 1 },
                });
            }
            return { message: "Bu foydalanuvchi allaqachon mahsulotni ko‘rgan." };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Mahsulotni ko‘rish jarayonida xatolik yuz berdi.");
        }
    }
};
exports.ProductViewService = ProductViewService;
exports.ProductViewService = ProductViewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductViewService);
//# sourceMappingURL=product-view.service.js.map