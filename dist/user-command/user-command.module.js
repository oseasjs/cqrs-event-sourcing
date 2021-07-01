"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommandModule = void 0;
const common_1 = require("@nestjs/common");
const user_command_service_1 = require("./service/user-command.service");
const user_command_controller_1 = require("./controller/user-command.controller");
const user_command_entity_1 = require("./entities/user-command.entity");
const typeorm_1 = require("@nestjs/typeorm");
const create_user_command_handler_1 = require("../cqrs/commands/create-user-command.handler.");
const cqrs_1 = require("@nestjs/cqrs");
const user_saga_1 = require("../cqrs/saga/user.saga");
const user_event_command_entity_1 = require("./entities/user-event-command.entity");
const user_service_command_service_1 = require("./service/user-service-command.service");
const create_user_query_handler_1 = require("../cqrs/commands/create-user-query.handler");
const user_query_module_1 = require("../user-query/user-query.module");
const synchronized_user_command_handler_1 = require("../cqrs/commands/synchronized-user-command.handler");
let UserCommandModule = class UserCommandModule {
};
UserCommandModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_command_entity_1.UserCommand, user_event_command_entity_1.UserEventCommand]),
            cqrs_1.CqrsModule,
            user_query_module_1.UserQueryModule
        ],
        controllers: [user_command_controller_1.UserCommandController],
        providers: [
            user_command_service_1.UserCommandService,
            user_service_command_service_1.UserEventCommandService,
            ...[create_user_command_handler_1.CreateUserCommandHandler, create_user_query_handler_1.CreateUserQueryHandler, synchronized_user_command_handler_1.SynchronizeUserCommandHandler],
            user_saga_1.UserSaga
        ]
    })
], UserCommandModule);
exports.UserCommandModule = UserCommandModule;
//# sourceMappingURL=user-command.module.js.map