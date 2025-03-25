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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrderService = class OrderService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, data) {
        try {
            const product = await this.prisma.product.findUnique({
                where: { id: data.productId },
            });
            if (!product)
                throw new common_1.NotFoundException("Mahsulot topilmadi");
            if (product.finalPrice == null)
                throw new common_1.InternalServerErrorException("Mahsulot narxi mavjud emas.");
            const summa = Number(product.finalPrice) * data.count;
            return await this.prisma.order.create({
                data: {
                    ...data,
                    userId,
                    summa,
                },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Buyurtma yaratishda xatolik yuz berdi.");
        }
    }
    async findAll(userId) {
        try {
            return await this.prisma.order.findMany({
                where: { userId },
                include: { product: true },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Buyurtmalarni olishda xatolik yuz berdi.");
        }
    }
    async findOne(id, userId) {
        try {
            const order = await this.prisma.order.findUnique({ where: { id } });
            if (!order || order.userId != userId)
                throw new common_1.NotFoundException("Buyurtma topilmadi.");
            return order;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Buyurtmani olishda xatolik yuz berdi.");
        }
    }
    async update(id, userId, data) {
        try {
            const existingOrder = await this.findOne(id, userId);
            if (data.count !== undefined) {
                const product = await this.prisma.product.findUnique({
                    where: { id: existingOrder.productId },
                });
                if (!product)
                    throw new common_1.NotFoundException("Mahsulot topilmadi");
                if (product.finalPrice == null)
                    throw new common_1.InternalServerErrorException("Mahsulot narxi mavjud emas.");
                const summa = Number(product.finalPrice) * data.count;
                return await this.prisma.order.update({
                    where: { id },
                    data: { ...data, summa },
                });
            }
            return await this.prisma.order.update({
                where: { id },
                data,
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Buyurtmani yangilashda xatolik yuz berdi.");
        }
    }
    async remove(id, userId) {
        try {
            const existingOrder = await this.findOne(id, userId);
            return await this.prisma.order.delete({ where: { id } });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Buyurtmani o‘chirishda xatolik yuz berdi.");
        }
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map