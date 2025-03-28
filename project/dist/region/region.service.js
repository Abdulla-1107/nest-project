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
exports.RegionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RegionService = class RegionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRegionDto) {
        try {
            const { name } = createRegionDto;
            let checkRegion = await this.prisma.region.findFirst({ where: { name } });
            if (checkRegion) {
                throw new common_1.ConflictException("Bunday Region mavjud");
            }
            return await this.prisma.region.create({ data: createRegionDto });
        }
        catch (error) {
            console.log(error.message);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findAllFiltered(name) {
        try {
            return await this.prisma.region.findMany({
                where: name
                    ? {
                        name: {
                            contains: name,
                            mode: "insensitive",
                        },
                    }
                    : {},
                include: {
                    users: {
                        select: {
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException("Regionlarni olishda xatolik yuz berdi.");
        }
    }
    async findOne(id) {
        try {
            const region = await this.prisma.region.findUnique({
                where: { id },
                include: {
                    users: {
                        select: {
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });
            if (!region) {
                throw new common_1.NotFoundException(`Region topilmadi.`);
            }
            return region;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async update(id, updateRegionDto) {
        try {
            const region = await this.prisma.region.update({
                where: { id },
                data: updateRegionDto,
            });
            return region;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Region Topilmadi.`);
        }
    }
    async remove(id) {
        try {
            const deletedRegion = await this.prisma.region.delete({
                where: { id },
            });
            return { message: "Region muvaffaqiyatli o'chirildi", deletedRegion };
        }
        catch (error) {
            throw new common_1.NotFoundException(`Region topilmadi`);
        }
    }
};
exports.RegionService = RegionService;
exports.RegionService = RegionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RegionService);
//# sourceMappingURL=region.service.js.map