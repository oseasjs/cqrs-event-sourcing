import { CreateUserCommandDto } from '../dto/create-user-command.dto';
import { CommandBus } from '@nestjs/cqrs';
export declare class UserCommandController {
    private commandBus;
    private logger;
    constructor(commandBus: CommandBus);
    create(seed: string, user: CreateUserCommandDto): void;
}
