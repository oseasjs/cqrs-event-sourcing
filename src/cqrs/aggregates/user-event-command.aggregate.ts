import { AggregateRoot } from '@nestjs/cqrs';
import { UserCommand } from '../../user-command/entities/user-command.entity';
import { SynchronizedUserEvent } from '../events/sincronized-user.event';

export class UserEventCommandAggregate extends AggregateRoot {

  constructor(public readonly userCommand: UserCommand) {
    super();    
  }

  addSynchronizedStatus() {
     this.apply(new SynchronizedUserEvent(this.userCommand));
  }
  
}