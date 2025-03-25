"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateColorItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_color_item_dto_1 = require("./create-color-item.dto");
class UpdateColorItemDto extends (0, swagger_1.PartialType)(create_color_item_dto_1.CreateColorItemDto) {
}
exports.UpdateColorItemDto = UpdateColorItemDto;
//# sourceMappingURL=update-color-item.dto.js.map