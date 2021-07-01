"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vars = void 0;
exports.vars = {
    mongoConnectionUrl: 'mongodb://admin:admin@localhost:27017/cqrs-event-sourcing-query-db?authSource=admin',
    appId: process.env.APPID ? process.env.APPID : 'STANDALONE',
};
//# sourceMappingURL=vars.js.map