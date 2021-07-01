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
exports.UserEventCommand = exports.EventType = void 0;
const typeorm_1 = require("typeorm");
var EventType;
(function (EventType) {
    EventType["CREATED"] = "CREATED";
    EventType["UPDATED"] = "UPDATED";
    EventType["DELETED"] = "DELETED";
    EventType["SYNCRONIZED"] = "SYNCRONIZED";
})(EventType = exports.EventType || (exports.EventType = {}));
let UserEventCommand = class UserEventCommand extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEventCommand.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id', type: 'integer' }),
    __metadata("design:type", Number)
], UserEventCommand.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({
        name: 'event_type',
        type: "enum",
        enum: [EventType.CREATED, EventType.UPDATED, EventType.DELETED, EventType.SYNCRONIZED],
        default: EventType.CREATED
    }),
    __metadata("design:type", String)
], UserEventCommand.prototype, "eventType", void 0);
__decorate([
    typeorm_1.Column({ name: 'event_data', type: 'text' }),
    __metadata("design:type", String)
], UserEventCommand.prototype, "eventData", void 0);
__decorate([
    typeorm_1.Column({ name: 'seed', type: 'text' }),
    __metadata("design:type", String)
], UserEventCommand.prototype, "seed", void 0);
__decorate([
    typeorm_1.Column({ name: 'app_id', type: 'text' }),
    __metadata("design:type", String)
], UserEventCommand.prototype, "appId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], UserEventCommand.prototype, "created_at", void 0);
UserEventCommand = __decorate([
    typeorm_1.Entity('cqrs_user_event_command')
], UserEventCommand);
exports.UserEventCommand = UserEventCommand;
//# sourceMappingURL=user-event-command.entity.js.map