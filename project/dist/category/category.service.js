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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoryService = class CategoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            return await this.prisma.category.create({ data });
        }
        catch (error) {
            throw new common_1.BadRequestException("Kategoriya yaratishda xatolik yuz berdi");
        }
    }
    async findAll() {
        try {
            return await this.prisma.category.findMany();
        }
        catch (error) {
            throw new common_1.BadRequestException("Kategoriyalarni olishda xatolik yuz berdi");
        }
    }
    async findOne(id) {
        try {
            const category = await this.prisma.category.findUnique({ where: { id } });
            if (!category)
                throw new common_1.NotFoundException("Kategoriya topilmadi");
            return category;
        }
        catch (error) {
            throw new common_1.BadRequestException("Kategoriya ma'lumotlarini olishda xatolik yuz berdi");
        }
    }
    async update(id, data) {
        try {
            await this.findOne(id);
            return await this.prisma.category.update({ where: { id }, data });
        }
        catch (error) {
            throw new common_1.BadRequestException("Kategoriya yangilashda xatolik yuz berdi");
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            return await this.prisma.category.delete({ where: { id } });
        }
        catch (error) {
            throw new common_1.BadRequestException("Kategoriya o‘chirishda xatolik yuz berdi");
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoryService);
//# sourceMappingURL=category.service.js.map