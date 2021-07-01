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
exports.CreateUserCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_user_command_dto_1 = require("../../user-command/dto/create-user-command.dto");
const user_command_service_1 = require("../../user-command/service/user-command.service");
let CreateUserCommandHandler = class CreateUserCommandHandler {
    constructor(userCommandService, publisher) {
        this.userCommandService = userCommandService;
        this.publisher = publisher;
    }
    async execute(createUserCommandDto) {
        const user = this.publisher.mergeObjectContext(await this.userCommandService.create(createUserCommandDto));
        user.createOnQuery();
        user.commit();
    }
};
CreateUserCommandHandler = __decorate([
    cqrs_1.CommandHandler(create_user_command_dto_1.CreateUserCommandDto),
    __metadata("design:paramtypes", [user_command_service_1.UserCommandService,
        cqrs_1.EventPublisher])
], CreateUserCommandHandler);
exports.CreateUserCommandHandler = CreateUserCommandHandler;
//# sourceMappingURL=create-user-command.handler..js.map