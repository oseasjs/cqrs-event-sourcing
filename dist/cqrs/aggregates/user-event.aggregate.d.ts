import { AggregateRoot } from '@nestjs/cqrs';
import { UserEventCommand } from '../../user-command/entities/user-event-command.entity';
import { UserCommand } from '../../user-command/entities/user-command.entity';
export declare class UserEventAggregate extends AggregateRoot {
    userCommand: UserCommand;
    userEventCommand: UserEventCommand;
    constructor(userCommand: UserCommand, userEventCommand: UserEventCommand);
}
