import { UserCommand } from 'src/user-command/entities/user-command.entity';
import { ICommand } from '@nestjs/cqrs';

export class SynchronizedUserEvent implements ICommand {

  constructor(
    public userCommand: UserCommand) {

  }

}