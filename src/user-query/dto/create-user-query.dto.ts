import { UserCommand } from "src/user-command/entities/user-command.entity";

export class CreateUserQueryDto {

  constructor(public readonly userId: UserCommand,
    public readonly email: string,
    public readonly seed: string,
    public readonly appId: string) {

  }

}
