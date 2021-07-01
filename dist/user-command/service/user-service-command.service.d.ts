import { Repository } from 'typeorm';
import { EventType, UserEventCommand } from '../entities/user-event-command.entity';
import { UserCommand } from '../entities/user-command.entity';
import { UserEventAggregate } from 'src/cqrs/aggregates/user-event.aggregate';
export declare class UserEventCommandService {
    private userEventRepository;
    private logger;
    constructor(userEventRepository: Repository<UserEventCommand>);
    create(userCommand: UserCommand, eventType: EventType): Promise<UserEventAggregate>;
}
