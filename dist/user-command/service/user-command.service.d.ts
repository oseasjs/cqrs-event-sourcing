import { CreateUserCommandDto } from '../dto/create-user-command.dto';
import { UserCommand } from '../entities/user-command.entity';
import { Repository } from 'typeorm';
import { UserCommandAggregate } from '../../cqrs/aggregates/user-command.aggregate';
import { UserEventCommandService } from './user-service-command.service';
export declare class UserCommandService {
    private userRepository;
    private userEventCommandService;
    private logger;
    constructor(userRepository: Repository<UserCommand>, userEventCommandService: UserEventCommandService);
    create(createUserCommandDto: CreateUserCommandDto): Promise<UserCommandAggregate>;
}
