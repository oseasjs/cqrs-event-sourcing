import { AggregateRoot } from '@nestjs/cqrs';
import { UserCommand } from '../../user-command/entities/user-command.entity';

export class CreateUserQueryAggregate extends AggregateRoot {

  constructor(
    public userCommand: UserCommand) {
    super();
  }
  
}