"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresTypeOrmConfig = void 0;
const DB_HOST = (process.env.DB_HOST) ? process.env.DB_HOST : 'localhost';
exports.PostgresTypeOrmConfig = {
    type: 'postgres',
    host: DB_HOST,
    port: 15432,
    username: 'admin',
    password: 'admin',
    database: 'postgres',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: true,
};
//# sourceMappingURL=postgres.typeorm.config.js.map