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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommandController = void 0;
const common_1 = require("@nestjs/common");
const create_user_command_dto_1 = require("../dto/create-user-command.dto");
const swagger_1 = require("@nestjs/swagger");
const cqrs_1 = require("@nestjs/cqrs");
let UserCommandController = class UserCommandController {
    constructor(commandBus) {
        this.commandBus = commandBus;
        this.logger = new common_1.Logger('UserCommandController');
    }
    create(seed, user) {
        this.logger.verbose(`Creating new User [email: '${user.email}'] `);
        this.commandBus.execute(new create_user_command_dto_1.CreateUserCommandDto(user.email, seed));
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Create an User, syncing or not with Query service' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, description: 'User created succesful' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.BAD_REQUEST, description: 'Fail on create User', type: common_1.BadRequestException }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.INTERNAL_SERVER_ERROR, description: 'Fail on create User', type: common_1.InternalServerErrorException }),
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Query('seed')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_command_dto_1.CreateUserCommandDto]),
    __metadata("design:returntype", void 0)
], UserCommandController.prototype, "create", null);
UserCommandController = __decorate([
    swagger_1.ApiTags('User normalized on Postgres DB (Command)'),
    common_1.Controller('v1/user-command'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], UserCommandController);
exports.UserCommandController = UserCommandController;
//# sourceMappingURL=user-command.controller.js.map