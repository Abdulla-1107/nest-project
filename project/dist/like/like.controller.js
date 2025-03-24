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
exports.LikeController = void 0;
const common_1 = require("@nestjs/common");
const like_service_1 = require("./like.service");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../guards/auth.guard");
let LikeController = class LikeController {
    likeService;
    constructor(likeService) {
        this.likeService = likeService;
    }
    async likeProduct(req, productId) {
        const userId = req["user"].id;
        return await this.likeService.likeProduct(userId, productId);
    }
    async unlikeProduct(req, productId) {
        const userId = req["user"].id;
        return await this.likeService.unlikeProduct(userId, productId);
    }
    async getUserLikes(req) {
        const userId = req["user"].id;
        return await this.likeService.getUserLikes(userId);
    }
};
exports.LikeController = LikeController;
__decorate([
    (0, common_1.Post)(":productId"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Mahsulotni like qilish" }),
    (0, swagger_1.ApiParam)({ name: "productId", example: "987e6543-e89b-12d3-a456-426614174999", description: "Mahsulot ID" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "likeProduct", null);
__decorate([
    (0, common_1.Delete)(":productId"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Mahsulotni unlike qilish" }),
    (0, swagger_1.ApiParam)({ name: "productId", example: "987e6543-e89b-12d3-a456-426614174999", description: "Mahsulot ID" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "unlikeProduct", null);
__decorate([
    (0, common_1.Get)("my-likes"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Foydalanuvchining like qilgan mahsulotlarini olish" }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "getUserLikes", null);
exports.LikeController = LikeController = __decorate([
    (0, swagger_1.ApiTags)("Likes"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("likes"),
    __metadata("design:paramtypes", [like_service_1.LikeService])
], LikeController);
//# sourceMappingURL=like.controller.js.map