"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserQueryDto = void 0;
const user_command_entity_1 = require("../../user-command/entities/user-command.entity");
class CreateUserQueryDto {
    constructor(userId, email, seed, appId) {
        this.userId = userId;
        this.email = email;
        this.seed = seed;
        this.appId = appId;
    }
}
exports.CreateUserQueryDto = CreateUserQueryDto;
//# sourceMappingURL=create-user-query.dto.js.map