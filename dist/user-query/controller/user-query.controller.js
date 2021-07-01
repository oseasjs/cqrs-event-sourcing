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
exports.UserQueryController = void 0;
const common_1 = require("@nestjs/common");
const user_query_service_1 = require("../service/user-query.service");
const swagger_1 = require("@nestjs/swagger");
const user_query_dto_1 = require("../dto/user-query.dto");
let UserQueryController = class UserQueryController {
    constructor(userQueryService) {
        this.userQueryService = userQueryService;
        this.logger = new common_1.Logger('UserQueryController');
    }
    findAll() {
        this.logger.verbose(`List All Users`);
        return this.userQueryService.findAll();
    }
    findByEmail(email) {
        this.logger.verbose(`Find User by email '${email}'`);
        return this.userQueryService.findByEmail(email);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Find All Users (TOP 10)' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, description: 'List of Users from MongoDB', type: [user_query_dto_1.UserQueryDto] }),
    common_1.Get(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserQueryController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Find Users by email' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, description: 'User found with email', type: user_query_dto_1.UserQueryDto }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NOT_FOUND, description: 'User not found', type: common_1.NotFoundException }),
    common_1.Get('/email'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Query('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserQueryController.prototype, "findByEmail", null);
UserQueryController = __decorate([
    swagger_1.ApiTags('User denormalized on Mongo (Query)'),
    common_1.Controller('v1/user-query'),
    __metadata("design:paramtypes", [user_query_service_1.UserQueryService])
], UserQueryController);
exports.UserQueryController = UserQueryController;
//# sourceMappingURL=user-query.controller.js.map