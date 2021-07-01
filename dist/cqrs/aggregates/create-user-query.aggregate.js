"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserQueryAggregate = void 0;
const cqrs_1 = require("@nestjs/cqrs");
class CreateUserQueryAggregate extends cqrs_1.AggregateRoot {
    constructor(userCommand) {
        super();
        this.userCommand = userCommand;
    }
}
exports.CreateUserQueryAggregate = CreateUserQueryAggregate;
//# sourceMappingURL=create-user-query.aggregate.js.map