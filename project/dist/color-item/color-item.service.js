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
exports.ColorItemService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ColorItemService = class ColorItemService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        try {
            return await this.prisma.colorItem.create({ data: dto });
        }
        catch (error) {
            throw new common_1.BadRequestException("Rang va mahsulot bog‘lanishini yaratib bo‘lmadi.");
        }
    }
    async findAll() {
        try {
            return await this.prisma.colorItem.findMany({
                include: { product: true, color: true },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException("Bog‘lanishlarni olishda xatolik yuz berdi.");
        }
    }
    async findOne(id) {
        try {
            const colorItem = await this.prisma.colorItem.findUnique({ where: { id } });
            if (!colorItem)
                throw new common_1.NotFoundException("Bog‘lanish topilmadi.");
            return colorItem;
        }
        catch (error) {
            throw new common_1.BadRequestException("Bog‘lanishni olishda xatolik yuz berdi.");
        }
    }
    async remove(id) {
        try {
            const deleted = await this.prisma.colorItem.delete({ where: { id } });
            return { message: "Bog‘lanish muvaffaqiyatli o‘chirildi.", deleted };
        }
        catch (error) {
            throw new common_1.BadRequestException("Bog‘lanishni o‘chirib bo‘lmadi.");
        }
    }
};
exports.ColorItemService = ColorItemService;
exports.ColorItemService = ColorItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ColorItemService);
//# sourceMappingURL=color-item.service.js.map