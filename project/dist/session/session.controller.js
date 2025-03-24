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
exports.SessionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const session_service_1 = require("./session.service");
const auth_guard_1 = require("../guards/auth.guard");
let SessionController = class SessionController {
    sessionService;
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    findAll() {
        return this.sessionService.findAll();
    }
    remove(id) {
        return this.sessionService.remove(id);
    }
};
exports.SessionController = SessionController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha sessiyalarni olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Barcha sessiyalar ro‘yxati" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SessionController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Sessiyani o‘chirish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Sessiya muvaffaqiyatli o‘chirildi",
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Sessiya topilmadi" }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SessionController.prototype, "remove", null);
exports.SessionController = SessionController = __decorate([
    (0, swagger_1.ApiTags)("Sessions"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)("session"),
    __metadata("design:paramtypes", [session_service_1.SessionService])
], SessionController);
//# sourceMappingURL=session.controller.js.map