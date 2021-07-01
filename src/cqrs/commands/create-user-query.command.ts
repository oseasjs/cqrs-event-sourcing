import { UserCommand } from 'src/user-command/entities/user-command.entity';

export class CreateUserQueryCommand {

  constructor(
    public userCommand: UserCommand) {
    
  }

}