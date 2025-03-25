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
exports.ColorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ColorService = class ColorService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createColorDto) {
        try {
            return await this.prisma.color.create({ data: createColorDto });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Rang yaratishda xatolik yuz berdi.");
        }
    }
    async findAll() {
        return await this.prisma.color.findMany();
    }
    async findOne(id) {
        const color = await this.prisma.color.findUnique({ where: { id } });
        if (!color) {
            throw new common_1.NotFoundException("Bunday rang topilmadi.");
        }
        return color;
    }
    async update(id, updateColorDto) {
        await this.findOne(id);
        try {
            return await this.prisma.color.update({
                where: { id },
                data: updateColorDto,
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Rangni yangilashda xatolik yuz berdi.");
        }
    }
    async remove(id) {
        await this.findOne(id);
        try {
            return await this.prisma.color.delete({ where: { id } });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Rangni o‘chirishda xatolik yuz berdi.");
        }
    }
};
exports.ColorService = ColorService;
exports.ColorService = ColorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ColorService);
//# sourceMappingURL=color.service.js.map