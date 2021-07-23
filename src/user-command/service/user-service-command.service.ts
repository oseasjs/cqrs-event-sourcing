import { Injectable, Logger } from '@nestjs/common';
import { AppConfig } from '../../config/app.config';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventType, UserEventCommand } from '../entities/user-event-command.entity';
import { UserCommand } from '../entities/user-command.entity';
import { UserEventAggregate } from 'src/cqrs/aggregates/user-event.aggregate';

@Injectable()
export class UserEventCommandService {

  private logger = new Logger('UserEventCommandService');

  constructor(
    @InjectRepository(UserEventCommand)
    private userEventRepository: Repository<UserEventCommand>) {

  }

  async create(userCommand: UserCommand, eventType: EventType) : Promise<UserEventAggregate> {

    let userEvent = new UserEventCommand();
    userEvent.userId = userCommand.id;
    userEvent.seed = userCommand.seed;
    userEvent.appId = AppConfig.appId;
    userEvent.eventType = eventType;
    userEvent.eventData = JSON.stringify(userCommand);

    return await this.userEventRepository
      .save(userEvent)
      .then(async (u) => {
        this.logger.verbose(`Created User Event '${u.eventType}' for userId '${u.userId}' with id ${u.id}`);
        return new UserEventAggregate(userCommand, u);
      })
      .catch(e => {
        this.logger.error('Error saving user event: ', e);
        throw e;
      });

  }
  
}
