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
exports.SynchronizeUserCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const user_query_entity_1 = require("../../user-query/entities/user-query.entity");
const syncronize_user_command_1 = require("./syncronize-user-command");
const user_service_command_service_1 = require("../../user-command/service/user-service-command.service");
let SynchronizeUserCommandHandler = class SynchronizeUserCommandHandler {
    constructor(userEventCommandService, publisher) {
        this.userEventCommandService = userEventCommandService;
        this.publisher = publisher;
    }
    async execute(syncronizeUserCommand) {
        const user = this.publisher.mergeObjectContext(await this.userEventCommandService.create(syncronizeUserCommand.userCommand, user_query_entity_1.EventType.SYNCRONIZED));
        user.commit();
    }
};
SynchronizeUserCommandHandler = __decorate([
    cqrs_1.CommandHandler(syncronize_user_command_1.SyncronizeUserCommand),
    __metadata("design:paramtypes", [user_service_command_service_1.UserEventCommandService,
        cqrs_1.EventPublisher])
], SynchronizeUserCommandHandler);
exports.SynchronizeUserCommandHandler = SynchronizeUserCommandHandler;
//# sourceMappingURL=synchronized-user-command.handler.js.map