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
exports.UserQuerySchema = exports.UserQuery = exports.EventType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var EventType;
(function (EventType) {
    EventType["CREATED"] = "CREATED";
    EventType["UPDATED"] = "UPDATED";
    EventType["DELETED"] = "DELETED";
    EventType["SYNCRONIZED"] = "SYNCRONIZED";
})(EventType = exports.EventType || (exports.EventType = {}));
let UserQuery = class UserQuery {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], UserQuery.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserQuery.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserQuery.prototype, "appId", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserQuery.prototype, "seed", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserQuery.prototype, "currentStatus", void 0);
UserQuery = __decorate([
    mongoose_1.Schema()
], UserQuery);
exports.UserQuery = UserQuery;
exports.UserQuerySchema = mongoose_1.SchemaFactory.createForClass(UserQuery);
//# sourceMappingURL=user-query.entity.js.map