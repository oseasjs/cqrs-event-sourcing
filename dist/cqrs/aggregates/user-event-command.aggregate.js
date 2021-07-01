"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEventCommandAggregate = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const sincronized_user_event_1 = require("../events/sincronized-user.event");
class UserEventCommandAggregate extends cqrs_1.AggregateRoot {
    constructor(userCommand) {
        super();
        this.userCommand = userCommand;
    }
    addSynchronizedStatus() {
        this.apply(new sincronized_user_event_1.SynchronizedUserEvent(this.userCommand));
    }
}
exports.UserEventCommandAggregate = UserEventCommandAggregate;
//# sourceMappingURL=user-event-command.aggregate.js.map