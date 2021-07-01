import { AggregateRoot } from '@nestjs/cqrs';
import { UserCommand } from '../../user-command/entities/user-command.entity';
export declare class UserEventCommandAggregate extends AggregateRoot {
    readonly userCommand: UserCommand;
    constructor(userCommand: UserCommand);
    addSynchronizedStatus(): void;
}
