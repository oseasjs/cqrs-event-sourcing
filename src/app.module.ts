import { Module } from '@nestjs/common';
import { UserCommandModule } from './user-command/user-command.module';
import { UserQueryModule } from './user-query/user-query.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PostgresTypeOrmConfig } from './config/postgres.typeorm.config';
import { join } from 'path';
import { AppConfig } from './config/app.config';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot(AppConfig.mongoConnectionUrl),    
    TypeOrmModule.forRoot(PostgresTypeOrmConfig),
    UserCommandModule, 
    UserQueryModule,
    CqrsModule
  ],
  controllers: [],  
})
export class AppModule {}
