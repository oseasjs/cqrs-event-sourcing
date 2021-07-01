import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserQueryController } from './controller/user-query.controller';
import { UserQuery, UserQuerySchema } from './entities/user-query.entity';
import { UserQueryService } from './service/user-query.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserQuery.name, schema: UserQuerySchema}])
  ],
  controllers: [UserQueryController],
  providers: [UserQueryService],
  exports: [
    UserQueryService
  ]
})
export class UserQueryModule {}
