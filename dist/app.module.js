"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_command_module_1 = require("./user-command/user-command.module");
const user_query_module_1 = require("./user-query/user-query.module");
const mongoose_1 = require("@nestjs/mongoose");
const typeorm_1 = require("@nestjs/typeorm");
const serve_static_1 = require("@nestjs/serve-static");
const postgres_typeorm_config_1 = require("./config/postgres.typeorm.config");
const path_1 = require("path");
const vars_1 = require("./config/vars");
const cqrs_1 = require("@nestjs/cqrs");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'client'),
                exclude: ['/api*'],
            }),
            mongoose_1.MongooseModule.forRoot(vars_1.vars.mongoConnectionUrl),
            typeorm_1.TypeOrmModule.forRoot(postgres_typeorm_config_1.PostgresTypeOrmConfig),
            user_command_module_1.UserCommandModule,
            user_query_module_1.UserQueryModule,
            cqrs_1.CqrsModule
        ],
        controllers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map