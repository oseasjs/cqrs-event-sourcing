import { AggregateRoot } from '@nestjs/cqrs';
import { UserCommand } from '../../user-command/entities/user-command.entity';
export declare class UserCommandAggregate extends AggregateRoot {
    readonly userCommand: UserCommand;
    constructor(userCommand: UserCommand);
    createOnQuery(): void;
}
