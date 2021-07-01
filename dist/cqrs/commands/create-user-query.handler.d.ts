import { ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateUserQueryCommand } from './create-user-query.command';
import { UserQueryService } from '../../user-query/service/user-query.service';
export declare class CreateUserQueryHandler implements ICommandHandler<CreateUserQueryCommand> {
    private readonly userQueryService;
    private readonly publisher;
    constructor(userQueryService: UserQueryService, publisher: EventPublisher);
    execute(createUserQueryCommand: CreateUserQueryCommand): Promise<void>;
}
