import { AggregateRoot } from '@nestjs/cqrs';
import { UserCommand } from '../../user-command/entities/user-command.entity';
export declare class CreateUserQueryAggregate extends AggregateRoot {
    userCommand: UserCommand;
    constructor(userCommand: UserCommand);
}
