"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSaga = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const operators_1 = require("rxjs/operators");
const create_user_query_command_1 = require("../commands/create-user-query.command");
const syncronize_user_command_1 = require("../commands/syncronize-user-command");
const create_user_query_event_1 = require("../events/create-user-query.event");
const sincronized_user_event_1 = require("../events/sincronized-user.event");
let UserSaga = class UserSaga {
    constructor() {
        this.userCreated = (event$) => {
            return event$
                .pipe(cqrs_1.ofType(create_user_query_event_1.CreateUserQueryEvent), operators_1.delay(1000), operators_1.map((event) => {
                return new create_user_query_command_1.CreateUserQueryCommand(event.userCommand);
            }));
        };
        this.userSynchronized = (event$) => {
            return event$
                .pipe(cqrs_1.ofType(sincronized_user_event_1.SynchronizedUserEvent), operators_1.delay(1000), operators_1.map((event) => {
                return new syncronize_user_command_1.SyncronizeUserCommand(event.userCommand);
            }));
        };
    }
};
__decorate([
    cqrs_1.Saga(),
    __metadata("design:type", Object)
], UserSaga.prototype, "userCreated", void 0);
__decorate([
    cqrs_1.Saga(),
    __metadata("design:type", Object)
], UserSaga.prototype, "userSynchronized", void 0);
UserSaga = __decorate([
    common_1.Injectable()
], UserSaga);
exports.UserSaga = UserSaga;
//# sourceMappingURL=user.saga.js.map