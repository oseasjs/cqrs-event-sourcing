"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommandAggregate = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_user_query_event_1 = require("../events/create-user-query.event");
class UserCommandAggregate extends cqrs_1.AggregateRoot {
    constructor(userCommand) {
        super();
        this.userCommand = userCommand;
    }
    createOnQuery() {
        this.apply(new create_user_query_event_1.CreateUserQueryEvent(this.userCommand));
    }
}
exports.UserCommandAggregate = UserCommandAggregate;
//# sourceMappingURL=user-command.aggregate.js.map