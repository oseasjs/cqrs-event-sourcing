import { UserQueryService } from '../service/user-query.service';
import { UserQueryDto } from '../dto/user-query.dto';
export declare class UserQueryController {
    private readonly userQueryService;
    private logger;
    constructor(userQueryService: UserQueryService);
    findAll(): Promise<UserQueryDto[]>;
    findByEmail(email: string): Promise<UserQueryDto>;
}
