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
exports.UserEventCommandService = void 0;
const common_1 = require("@nestjs/common");
const vars_1 = require("../../config/vars");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_event_command_entity_1 = require("../entities/user-event-command.entity");
const user_event_aggregate_1 = require("../../cqrs/aggregates/user-event.aggregate");
let UserEventCommandService = class UserEventCommandService {
    constructor(userEventRepository) {
        this.userEventRepository = userEventRepository;
        this.logger = new common_1.Logger('UserEventCommandService');
    }
    async create(userCommand, eventType) {
        let userEvent = new user_event_command_entity_1.UserEventCommand();
        userEvent.userId = userCommand.id;
        userEvent.seed = userCommand.seed;
        userEvent.appId = vars_1.vars.appId;
        userEvent.eventType = eventType;
        userEvent.eventData = JSON.stringify(userCommand);
        return await this.userEventRepository
            .save(userEvent)
            .then(async (u) => {
            this.logger.verbose(`Created User Event '${u.eventType}' for userId '${u.userId}' with id ${u.id}`);
            return new user_event_aggregate_1.UserEventAggregate(userCommand, u);
        })
            .catch(e => {
            this.logger.error('Error saving user event: ', e);
            throw e;
        });
    }
};
UserEventCommandService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_event_command_entity_1.UserEventCommand)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserEventCommandService);
exports.UserEventCommandService = UserEventCommandService;
//# sourceMappingURL=user-service-command.service.js.map