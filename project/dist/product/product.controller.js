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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../guards/auth.guard");
let ProductController = class ProductController {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    async create(req, data) {
        const userId = req["user"].id;
        return await this.productService.create({ ...data, userId });
    }
    async findAll(page, limit, search, categoryId) {
        const pageNumber = Math.max(parseInt(page) || 1, 1);
        const limitNumber = Math.max(parseInt(limit) || 10, 1);
        return await this.productService.findAll(pageNumber, limitNumber, search || "", categoryId || "");
    }
    async findOne(id) {
        return await this.productService.findOne(id);
    }
    async update(req, id, data) {
        const userId = req["user"].id;
        return await this.productService.update(id, userId, data);
    }
    async remove(req, id) {
        const userId = req["user"].id;
        return await this.productService.remove(id, userId);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Yangi mahsulot qo‘shish" }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Barcha mahsulotlarni olish" }),
    (0, swagger_1.ApiQuery)({
        name: "page",
        required: false,
        example: 1,
        description: "Sahifa raqami",
    }),
    (0, swagger_1.ApiQuery)({
        name: "limit",
        required: false,
        example: 10,
        description: "Bir sahifadagi mahsulotlar soni",
    }),
    (0, swagger_1.ApiQuery)({
        name: "search",
        required: false,
        example: "iPhone",
        description: "Qidiruv bo‘yicha filter",
    }),
    (0, swagger_1.ApiQuery)({
        name: "categoryId",
        required: false,
        example: "123e4567",
        description: "Kategoriya ID si",
    }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __param(2, (0, common_1.Query)("search")),
    __param(3, (0, common_1.Query)("categoryId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Bitta mahsulotni olish" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        example: "987e6543-e89b-12d3-a456-426614174999",
        description: "Mahsulot ID si",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Mahsulotni yangilash (faqat egasi)" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        example: "987e6543-e89b-12d3-a456-426614174999",
        description: "Mahsulot ID si",
    }),
    (0, swagger_1.ApiBody)({ type: update_product_dto_1.UpdateProductDto }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: "Mahsulotni o‘chirish (faqat egasi)" }),
    (0, swagger_1.ApiParam)({
        name: "id",
        example: "987e6543-e89b-12d3-a456-426614174999",
        description: "Mahsulot ID si",
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "remove", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)("Products"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("products"),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map