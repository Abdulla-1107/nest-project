"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInformationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_information_dto_1 = require("./create-information.dto");
class UpdateInformationDto extends (0, swagger_1.PartialType)(create_information_dto_1.CreateInformationDto) {
}
exports.UpdateInformationDto = UpdateInformationDto;
//# sourceMappingURL=update-information.dto.js.map