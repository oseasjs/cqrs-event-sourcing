import { AggregateRoot } from '@nestjs/cqrs';
import { UserEventCommand } from '../../user-command/entities/user-event-command.entity';
import { UserCommand } from '../../user-command/entities/user-command.entity';

export class UserEventAggregate extends AggregateRoot {

  constructor(
    public userCommand: UserCommand,
    public userEventCommand: UserEventCommand) {
    super();
  }
  
}