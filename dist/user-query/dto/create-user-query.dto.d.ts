import { UserCommand } from "src/user-command/entities/user-command.entity";
export declare class CreateUserQueryDto {
    readonly userId: UserCommand;
    readonly email: string;
    readonly seed: string;
    readonly appId: string;
    constructor(userId: UserCommand, email: string, seed: string, appId: string);
}
