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
exports.CreateChatDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateChatDto {
    text;
    fromId;
    toId;
    productId;
}
exports.CreateChatDto = CreateChatDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Salom, qalesan?", description: "Xabar matni" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1, { message: "Xabar kamida 1 ta belgidan iborat bo‘lishi kerak" }),
    (0, class_validator_1.MaxLength)(500, { message: "Xabar uzunligi 500 ta belgidan oshmasligi kerak" }),
    __metadata("design:type", String)
], CreateChatDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateChatDto.prototype, "fromId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "a2d3e4f5-6b7c-8d9e-0f1a-2b3c4d5e6f7g", description: "Xabar qabul qilayotgan foydalanuvchi IDsi" }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateChatDto.prototype, "toId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f", description: "Mahsulot IDsi (agar mahsulot bilan bog‘liq bo‘lsa)" }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateChatDto.prototype, "productId", void 0);
//# sourceMappingURL=create-chat.dto.js.map