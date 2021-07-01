import { ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { SyncronizeUserCommand } from './syncronize-user-command';
import { UserEventCommandService } from 'src/user-command/service/user-service-command.service';
export declare class SynchronizeUserCommandHandler implements ICommandHandler<SyncronizeUserCommand> {
    private readonly userEventCommandService;
    private readonly publisher;
    constructor(userEventCommandService: UserEventCommandService, publisher: EventPublisher);
    execute(syncronizeUserCommand: SyncronizeUserCommand): Promise<void>;
}
