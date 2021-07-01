"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_query_controller_1 = require("./controller/user-query.controller");
const user_query_entity_1 = require("./entities/user-query.entity");
const user_query_service_1 = require("./service/user-query.service");
let UserQueryModule = class UserQueryModule {
};
UserQueryModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_query_entity_1.UserQuery.name, schema: user_query_entity_1.UserQuerySchema }])
        ],
        controllers: [user_query_controller_1.UserQueryController],
        providers: [user_query_service_1.UserQueryService],
        exports: [
            user_query_service_1.UserQueryService
        ]
    })
], UserQueryModule);
exports.UserQueryModule = UserQueryModule;
//# sourceMappingURL=user-query.module.js.map