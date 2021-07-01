import { UserCommand } from 'src/user-command/entities/user-command.entity';
import { ICommand } from '@nestjs/cqrs';
export declare class CreateUserQueryEvent implements ICommand {
    userCommand: UserCommand;
    constructor(userCommand: UserCommand);
}
