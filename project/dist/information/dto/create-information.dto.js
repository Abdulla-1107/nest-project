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
exports.CreateInformationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateInformationDto {
    about;
    privacyPolicy;
    email;
    phone;
    telegram;
    instagram;
    facebook;
}
exports.CreateInformationDto = CreateInformationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Bu sayt haqida ma'lumot...", description: "Sayt haqida" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], CreateInformationDto.prototype, "about", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Maxfiylik siyosati...", description: "Privacy policy" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(5000),
    __metadata("design:type", String)
], CreateInformationDto.prototype, "privacyPolicy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "admin@example.com", description: "Email" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateInformationDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "+998901234567", description: "Telefon raqami" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInformationDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "https://t.me/example", description: "Telegram manzili" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInformationDto.prototype, "telegram", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "https://instagram.com/example", description: "Instagram" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInformationDto.prototype, "instagram", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "https://facebook.com/example", description: "Facebook" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInformationDto.prototype, "facebook", void 0);
//# sourceMappingURL=create-information.dto.js.map