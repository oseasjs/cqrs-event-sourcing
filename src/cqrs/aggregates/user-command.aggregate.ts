import { AggregateRoot } from '@nestjs/cqrs';
import { UserCommand } from '../../user-command/entities/user-command.entity';
import { CreateUserQueryEvent } from '../events/create-user-query.event';

export class UserCommandAggregate extends AggregateRoot {

  constructor(public readonly userCommand: UserCommand) {
    super();    
  }

  createOnQuery() {
    this.apply(new CreateUserQueryEvent(this.userCommand));
  }
  
}