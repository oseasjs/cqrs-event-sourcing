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
exports.UserQueryService = void 0;
const common_1 = require("@nestjs/common");
const user_query_entity_1 = require("../entities/user-query.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const vars_1 = require("../../config/vars");
const user_query_dto_1 = require("../dto/user-query.dto");
const user_event_command_aggregate_1 = require("../../cqrs/aggregates/user-event-command.aggregate");
let UserQueryService = class UserQueryService {
    constructor(UserQueryModel) {
        this.UserQueryModel = UserQueryModel;
        this.logger = new common_1.Logger('UserQueryService');
    }
    async create(createUserQueryCommand) {
        const userModel = new this.UserQueryModel();
        userModel.id = createUserQueryCommand.userCommand.id;
        userModel.email = createUserQueryCommand.userCommand.email;
        userModel.seed = createUserQueryCommand.userCommand.seed;
        userModel.appId = vars_1.vars.appId;
        userModel.currentStatus = user_query_entity_1.EventType.SYNCRONIZED;
        return await userModel
            .save()
            .then(async (u) => {
            this.logger.verbose(`Created User on Mongo with email: '${u.email}'`);
            return new user_event_command_aggregate_1.UserEventCommandAggregate(createUserQueryCommand.userCommand);
        });
    }
    async findAll() {
        let userQueryDtoList = [];
        await this.UserQueryModel
            .find()
            .limit(10)
            .then(users => {
            users.forEach(u => userQueryDtoList.push(this.toDto(u)));
        });
        return userQueryDtoList;
    }
    async findById(id) {
        return await this
            .UserQueryModel
            .findOne({ id })
            .then(user => this.toDto(user));
    }
    async findByEmail(email) {
        return await this.UserQueryModel
            .findOne({ email })
            .then(user => {
            if (user) {
                return this.toDto(user);
            }
            else {
                throw new common_1.NotFoundException(`User not found with email: '${email}'`);
            }
        });
    }
    toDto(userQuery) {
        return new user_query_dto_1.UserQueryDto(userQuery._id, userQuery.id, userQuery.email, userQuery.seed, userQuery.appId);
    }
};
UserQueryService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_query_entity_1.UserQuery.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserQueryService);
exports.UserQueryService = UserQueryService;
//# sourceMappingURL=user-query.service.js.map