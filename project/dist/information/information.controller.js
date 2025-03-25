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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationController = void 0;
const common_1 = require("@nestjs/common");
const information_service_1 = require("./information.service");
const create_information_dto_1 = require("./dto/create-information.dto");
const update_information_dto_1 = require("./dto/update-information.dto");
const swagger_1 = require("@nestjs/swagger");
const role_decorators_1 = require("../decorators/role.decorators");
const role_enum_1 = require("../enums/role.enum");
const auth_guard_1 = require("../guards/auth.guard");
const role_guard_1 = require("../guards/role.guard");
let InformationController = class InformationController {
    informationService;
    constructor(informationService) {
        this.informationService = informationService;
    }
    getInformation() {
        return this.informationService.getInformation();
    }
    createInformation(createInformationDto) {
        return this.informationService.createInformation(createInformationDto);
    }
    updateInformation(updateInformationDto) {
        return this.informationService.updateInformation(updateInformationDto);
    }
};
exports.InformationController = InformationController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Sayt haqida ma'lumotni olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Ma'lumot topildi" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InformationController.prototype, "getInformation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Sayt haqida yangi ma'lumot qo'shish" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Ma'lumot muvaffaqiyatli qo'shildi",
    }),
    (0, role_decorators_1.Role)(role_enum_1.Roles.ADMIN),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_information_dto_1.CreateInformationDto]),
    __metadata("design:returntype", void 0)
], InformationController.prototype, "createInformation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Sayt ma'lumotlarini yangilash" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Ma'lumot muvaffaqiyatli yangilandi",
    }),
    (0, role_decorators_1.Role)(role_enum_1.Roles.ADMIN),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_information_dto_1.UpdateInformationDto]),
    __metadata("design:returntype", void 0)
], InformationController.prototype, "updateInformation", null);
exports.InformationController = InformationController = __decorate([
    (0, swagger_1.ApiTags)("Information"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("information"),
    __metadata("design:paramtypes", [information_service_1.InformationService])
], InformationController);
//# sourceMappingURL=information.controller.js.map