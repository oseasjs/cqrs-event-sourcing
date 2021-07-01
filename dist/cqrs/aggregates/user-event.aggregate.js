"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEventAggregate = void 0;
const cqrs_1 = require("@nestjs/cqrs");
class UserEventAggregate extends cqrs_1.AggregateRoot {
    constructor(userCommand, userEventCommand) {
        super();
        this.userCommand = userCommand;
        this.userEventCommand = userEventCommand;
    }
}
exports.UserEventAggregate = UserEventAggregate;
//# sourceMappingURL=user-event.aggregate.js.map