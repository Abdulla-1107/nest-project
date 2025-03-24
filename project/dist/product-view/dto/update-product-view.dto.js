"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductViewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_product_view_dto_1 = require("./create-product-view.dto");
class UpdateProductViewDto extends (0, swagger_1.PartialType)(create_product_view_dto_1.CreateProductViewDto) {
}
exports.UpdateProductViewDto = UpdateProductViewDto;
//# sourceMappingURL=update-product-view.dto.js.map