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
exports.UserCommandService = void 0;
const common_1 = require("@nestjs/common");
const user_command_entity_1 = require("../entities/user-command.entity");
const vars_1 = require("../../config/vars");
const typeorm_1 = require("typeorm");
const user_command_aggregate_1 = require("../../cqrs/aggregates/user-command.aggregate");
const typeorm_2 = require("@nestjs/typeorm");
const user_service_command_service_1 = require("./user-service-command.service");
const user_event_command_entity_1 = require("../entities/user-event-command.entity");
let UserCommandService = class UserCommandService {
    constructor(userRepository, userEventCommandService) {
        this.userRepository = userRepository;
        this.userEventCommandService = userEventCommandService;
        this.logger = new common_1.Logger('UserCommandService');
    }
    async create(createUserCommandDto) {
        let user = new user_command_entity_1.UserCommand();
        user.email = createUserCommandDto.email;
        user.seed = createUserCommandDto.seed;
        user.appId = vars_1.vars.appId;
        return await this.userRepository
            .save(user)
            .then(async (u) => {
            this.logger.verbose(`Created User with email: '${u.email}' and id ${u.id}`);
            return await this
                .userEventCommandService
                .create(user, user_event_command_entity_1.EventType.CREATED)
                .then(() => new user_command_aggregate_1.UserCommandAggregate(user));
        })
            .catch(e => {
            this.logger.error('Error saving user: ', e);
            throw e;
        });
    }
};
UserCommandService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_command_entity_1.UserCommand)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        user_service_command_service_1.UserEventCommandService])
], UserCommandService);
exports.UserCommandService = UserCommandService;
//# sourceMappingURL=user-command.service.js.map