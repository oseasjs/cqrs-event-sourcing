"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserQueryEvent = void 0;
const user_command_entity_1 = require("../../user-command/entities/user-command.entity");
class CreateUserQueryEvent {
    constructor(userCommand) {
        this.userCommand = userCommand;
    }
}
exports.CreateUserQueryEvent = CreateUserQueryEvent;
//# sourceMappingURL=create-user-query.event.js.map