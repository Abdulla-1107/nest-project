"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("./prisma/prisma.service");
const region_module_1 = require("./region/region.module");
const session_module_1 = require("./session/session.module");
const prisma_module_1 = require("./prisma/prisma.module");
const product_module_1 = require("./product/product.module");
const category_module_1 = require("./category/category.module");
const like_module_1 = require("./like/like.module");
const comment_module_1 = require("./comment/comment.module");
const order_module_1 = require("./order/order.module");
const product_view_module_1 = require("./product-view/product-view.module");
const chat_gateway_1 = require("./chat/chat.gateway");
const chat_service_1 = require("./chat/chat.service");
const chat_module_1 = require("./chat/chat.module");
const color_item_module_1 = require("./color-item/color-item.module");
const color_module_1 = require("./color/color.module");
const information_module_1 = require("./information/information.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, config_1.ConfigModule.forRoot(), region_module_1.RegionModule, session_module_1.SessionModule, prisma_module_1.PrismaModule, product_module_1.ProductModule, category_module_1.CategoryModule, like_module_1.LikeModule, comment_module_1.CommentModule, order_module_1.OrderModule, product_view_module_1.ProductViewModule, chat_module_1.ChatModule, color_item_module_1.ColorItemModule, color_module_1.ColorModule, information_module_1.InformationModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, chat_gateway_1.ChatGateway, chat_service_1.ChatService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map