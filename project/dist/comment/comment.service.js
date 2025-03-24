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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommentService = class CommentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, data) {
        try {
            return await this.prisma.comment.create({
                data: {
                    ...data,
                    userId,
                },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("comment qo‘shishda xatolik yuz berdi.");
        }
    }
    async findAll(productId) {
        try {
            return await this.prisma.comment.findMany({
                where: { productId },
                include: { user: true },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("commentlarni olishda xatolik yuz berdi.");
        }
    }
    async findOne(id) {
        try {
            const comment = await this.prisma.comment.findUnique({ where: { id } });
            if (!comment)
                throw new common_1.NotFoundException("comment topilmadi.");
            return comment;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("commentni olishda xatolik yuz berdi.");
        }
    }
    async update(id, userId, data) {
        try {
            const existingComment = await this.findOne(id);
            if (existingComment.userId != userId) {
                throw new common_1.NotFoundException("Bu commentni o‘zgartirish huquqiga ega emassiz.");
            }
            return await this.prisma.comment.update({
                where: { id },
                data,
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("commentni yangilashda xatolik yuz berdi.");
        }
    }
    async remove(id, userId) {
        try {
            const existingComment = await this.findOne(id);
            if (existingComment.userId != userId) {
                throw new common_1.NotFoundException("Bu commentni o‘chirish huquqiga ega emassiz.");
            }
            return await this.prisma.comment.delete({ where: { id } });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("commentni o‘chirishda xatolik yuz berdi.");
        }
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentService);
//# sourceMappingURL=comment.service.js.map