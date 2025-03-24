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
exports.LikeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LikeService = class LikeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async likeProduct(userId, productId) {
        const product = await this.prisma.product.findUnique({ where: { id: productId } });
        if (!product)
            throw new common_1.NotFoundException("Mahsulot topilmadi");
        const existingLike = await this.prisma.like.findFirst({
            where: { userId, productId },
        });
        if (existingLike)
            throw new common_1.BadRequestException("Siz bu mahsulotni allaqachon like qilgansiz");
        return await this.prisma.like.create({
            data: { userId, productId },
        });
    }
    async unlikeProduct(userId, productId) {
        const like = await this.prisma.like.findFirst({
            where: { userId, productId },
        });
        if (!like)
            throw new common_1.NotFoundException("Siz bu mahsulotni like qilmagansiz");
        return await this.prisma.like.delete({
            where: { id: like.id },
        });
    }
    async getUserLikes(userId) {
        return await this.prisma.like.findMany({
            where: { userId },
            include: { product: true },
        });
    }
};
exports.LikeService = LikeService;
exports.LikeService = LikeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LikeService);
//# sourceMappingURL=like.service.js.map