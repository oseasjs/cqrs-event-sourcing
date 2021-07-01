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
exports.CreateUserQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_user_query_command_1 = require("./create-user-query.command");
const user_query_service_1 = require("../../user-query/service/user-query.service");
let CreateUserQueryHandler = class CreateUserQueryHandler {
    constructor(userQueryService, publisher) {
        this.userQueryService = userQueryService;
        this.publisher = publisher;
    }
    async execute(createUserQueryCommand) {
        const user = await this.publisher.mergeObjectContext(await this.userQueryService.create(createUserQueryCommand));
        user.addSynchronizedStatus();
        user.commit();
    }
};
CreateUserQueryHandler = __decorate([
    cqrs_1.CommandHandler(create_user_query_command_1.CreateUserQueryCommand),
    __metadata("design:paramtypes", [user_query_service_1.UserQueryService,
        cqrs_1.EventPublisher])
], CreateUserQueryHandler);
exports.CreateUserQueryHandler = CreateUserQueryHandler;
//# sourceMappingURL=create-user-query.handler.js.map