import { UserCommand } from 'src/user-command/entities/user-command.entity';
import { ICommand } from '@nestjs/cqrs';

export class CreateUserQueryEvent implements ICommand {

  constructor(
    public userCommand: UserCommand) {

  }

}