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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductService = class ProductService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, data) {
        const { categoryId } = data;
        if (categoryId) {
            const category = await this.prisma.category.findFirst({
                where: { id: categoryId },
            });
            if (!category) {
                throw new common_1.NotFoundException("Kategoriya topilmadi");
            }
            const { price, discountPercentage = 0, discountAmount = 0 } = data;
            const finalPrice = price - price * (discountPercentage / 100) - discountAmount;
            console.log(userId);
            return this.prisma.product.create({
                data: { ...data, userId, finalPrice },
            });
        }
    }
    async findAll(page, limit, search, categoryId) {
        return this.prisma.product.findMany({
            where: {
                name: { contains: search, mode: "insensitive" },
                ...(categoryId && { categoryId }),
            },
            skip: (page - 1) * limit,
            take: limit,
        });
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException("Mahsulot topilmadi");
        return product;
    }
    async update(id, userId, data) {
        const product = await this.findOne(id);
        if (product.userId != userId) {
            throw new common_1.ForbiddenException("Siz faqat o'zingiz yaratgan mahsulotni yangilashingiz mumkin");
        }
        if (data.price != undefined ||
            data.discountPercentage != undefined ||
            data.discountAmount != undefined) {
            const price = Number(data.price ?? product.price);
            const discountPercentage = Number(data.discountPercentage ?? 0);
            const discountAmount = Number(data.discountAmount ?? 0);
            data.finalPrice =
                price - price * (discountPercentage / 100) - discountAmount;
        }
        return this.prisma.product.update({
            where: { id },
            data,
        });
    }
    async remove(id, userId) {
        const product = await this.findOne(id);
        if (product.userId != userId) {
            throw new common_1.ForbiddenException("Siz faqat o'zingiz yaratgan mahsulotni o'chirishingiz mumkin");
        }
        return this.prisma.product.delete({ where: { id } });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map