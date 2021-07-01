import { UserQueryDocument } from '../entities/user-query.entity';
import { Model } from 'mongoose';
import { UserQueryDto } from '../dto/user-query.dto';
import { CreateUserQueryCommand } from '../../cqrs/commands/create-user-query.command';
import { UserEventCommandAggregate } from 'src/cqrs/aggregates/user-event-command.aggregate';
export declare class UserQueryService {
    private UserQueryModel;
    private logger;
    constructor(UserQueryModel: Model<UserQueryDocument>);
    create(createUserQueryCommand: CreateUserQueryCommand): Promise<UserEventCommandAggregate>;
    findAll(): Promise<UserQueryDto[]>;
    findById(id: number): Promise<UserQueryDto>;
    findByEmail(email: string): Promise<UserQueryDto>;
    private toDto;
}
