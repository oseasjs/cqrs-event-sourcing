"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const logger = new common_1.Logger('main');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    app.setGlobalPrefix('api');
    initSwagger(app);
    const port = process.env.PORT ? +process.env.PORT : 8080;
    logger.log(`Application listerner on port '${port}'`);
    await app.listen(port);
}
function initSwagger(app) {
    const documetBuilder = new swagger_1.DocumentBuilder()
        .setTitle('CQRS ES APP')
        .setDescription('CQRS and Event Sourcing application')
        .setVersion('1.0')
        .build();
    const swaggerModule = swagger_1.SwaggerModule.createDocument(app, documetBuilder);
    swagger_1.SwaggerModule.setup('api', app, swaggerModule, {
        swaggerOptions: { defaultModelsExpandDepth: -1 },
    });
}
bootstrap();
//# sourceMappingURL=main.js.map