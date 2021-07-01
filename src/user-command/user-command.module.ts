import { Module } from '@nestjs/common';
import { UserCommandService } from './service/user-command.service';
import { UserCommandController } from './controller/user-command.controller';
import { UserCommand } from './entities/user-command.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserCommandHandler } from '../cqrs/commands/create-user-command.handler.';
import { CqrsModule } from '@nestjs/cqrs';
import { UserSaga } from '../cqrs/saga/user.saga';
import { UserEventCommand } from './entities/user-event-command.entity';
import { UserEventCommandService } from './service/user-service-command.service';
import { CreateUserQueryHandler } from 'src/cqrs/commands/create-user-query.handler';
import { UserQueryModule } from '../user-query/user-query.module';
import { SynchronizeUserCommandHandler } from 'src/cqrs/commands/synchronized-user-command.handler';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserCommand, UserEventCommand]),
    CqrsModule,
    UserQueryModule
  ],
  controllers: [UserCommandController],
  providers: [
    UserCommandService,
    UserEventCommandService,
    ... [CreateUserCommandHandler, CreateUserQueryHandler, SynchronizeUserCommandHandler],
    UserSaga
  ]
})
export class UserCommandModule {}
