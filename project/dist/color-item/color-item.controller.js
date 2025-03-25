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
exports.ColorItemController = void 0;
const common_1 = require("@nestjs/common");
const color_item_service_1 = require("./color-item.service");
const create_color_item_dto_1 = require("./dto/create-color-item.dto");
const swagger_1 = require("@nestjs/swagger");
let ColorItemController = class ColorItemController {
    colorItemService;
    constructor(colorItemService) {
        this.colorItemService = colorItemService;
    }
    create(dto) {
        return this.colorItemService.create(dto);
    }
    findAll() {
        return this.colorItemService.findAll();
    }
    findOne(id) {
        return this.colorItemService.findOne(id);
    }
    remove(id) {
        return this.colorItemService.remove(id);
    }
};
exports.ColorItemController = ColorItemController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Mahsulotga rang qo‘shish" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_color_item_dto_1.CreateColorItemDto]),
    __metadata("design:returntype", void 0)
], ColorItemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Barcha rang-masulot bog‘lanishlarini olish" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColorItemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Bitta rang-masulot bog‘lanishini olish" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ColorItemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Rang-masulot bog‘lanishini o‘chirish" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ColorItemController.prototype, "remove", null);
exports.ColorItemController = ColorItemController = __decorate([
    (0, swagger_1.ApiTags)("Color Items"),
    (0, common_1.Controller)("color-items"),
    __metadata("design:paramtypes", [color_item_service_1.ColorItemService])
], ColorItemController);
//# sourceMappingURL=color-item.controller.js.map