import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { EventType } from '../../user-query/entities/user-query.entity';
import { SyncronizeUserCommand } from './syncronize-user-command';
import { UserEventCommandService } from 'src/user-command/service/user-service-command.service';

@CommandHandler(SyncronizeUserCommand)
export class SynchronizeUserCommandHandler implements ICommandHandler<SyncronizeUserCommand> {

  constructor(
    private readonly userEventCommandService: UserEventCommandService,
    private readonly publisher: EventPublisher) {
    
  }

  async execute(syncronizeUserCommand: SyncronizeUserCommand) {
    
    const user = this.publisher.mergeObjectContext(
      await this.userEventCommandService.create(syncronizeUserCommand.userCommand, EventType.SYNCRONIZED)
    );

    user.commit();

  }
  
}
