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
exports.InformationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InformationService = class InformationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getInformation() {
        const info = await this.prisma.information.findFirst();
        if (!info) {
            throw new common_1.NotFoundException("Ma'lumot topilmadi");
        }
        return info;
    }
    async createInformation(dto) {
        const existingInfo = await this.prisma.information.findFirst();
        if (existingInfo) {
            throw new common_1.InternalServerErrorException("Ma'lumot allaqachon mavjud");
        }
        return await this.prisma.information.create({ data: dto });
    }
    async updateInformation(dto) {
        const info = await this.prisma.information.findFirst();
        if (!info) {
            throw new common_1.NotFoundException("Ma'lumot topilmadi");
        }
        try {
            return await this.prisma.information.update({
                where: { id: info.id },
                data: dto,
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Yangilashda xatolik yuz berdi");
        }
    }
};
exports.InformationService = InformationService;
exports.InformationService = InformationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InformationService);
//# sourceMappingURL=information.service.js.map