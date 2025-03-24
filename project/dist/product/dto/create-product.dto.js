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
exports.CreateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const product_type_enum_1 = require("../../enums/product.type.enum");
class CreateProductDto {
    name;
    price;
    discountPercentage;
    discountAmount;
    finalPrice;
    count;
    description;
    condition;
    bargain;
    status;
    type;
    location;
    categoryId;
    userId;
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "iPhone 15", description: "Mahsulot nomi" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1200, description: "Mahsulot narxi" }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10, description: "Chegirma foizi", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "discountPercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100, description: "Chegirma miqdori", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "discountAmount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "finalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: "Ombordagi mahsulot soni" }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Yangi iPhone 15", description: "Mahsulot tavsifi" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Yangi", description: "Mahsulot holati" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "condition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: "Kelishish mumkinligi", required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "bargain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "active", description: "Mahsulot statusi" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: product_type_enum_1.ProductType, description: "Mahsulot turi" }),
    (0, class_validator_1.IsEnum)(product_type_enum_1.ProductType),
    __metadata("design:type", String)
], CreateProductDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '{"latitude": 41.2995, "longitude": 69.2401}', description: "Lokatsiya" }),
    (0, class_validator_1.IsJSON)(),
    __metadata("design:type", Object)
], CreateProductDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "123e4567-e89b-12d3-a456-426614174000", description: "Kategoriya ID" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "userId", void 0);
//# sourceMappingURL=create-product.dto.js.map