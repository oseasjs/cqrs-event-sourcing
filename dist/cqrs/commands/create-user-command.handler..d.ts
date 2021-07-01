import { ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateUserCommandDto } from '../../user-command/dto/create-user-command.dto';
import { UserCommandService } from '../../user-command/service/user-command.service';
export declare class CreateUserCommandHandler implements ICommandHandler<CreateUserCommandDto> {
    private readonly userCommandService;
    private readonly publisher;
    constructor(userCommandService: UserCommandService, publisher: EventPublisher);
    execute(createUserCommandDto: CreateUserCommandDto): Promise<void>;
}
