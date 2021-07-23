import { Injectable, Logger } from '@nestjs/common';
import { CreateUserCommandDto } from '../dto/create-user-command.dto';
import { UserCommand } from '../entities/user-command.entity';
import { AppConfig } from '../../config/app.config';
import { Repository } from 'typeorm';
import { UserCommandAggregate } from '../../cqrs/aggregates/user-command.aggregate';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEventCommandService } from './user-service-command.service';
import { EventType } from '../entities/user-event-command.entity';

@Injectable()
export class UserCommandService {

  private logger = new Logger('UserCommandService');

  constructor(
    @InjectRepository(UserCommand)
    private userRepository: Repository<UserCommand>,
    private userEventCommandService: UserEventCommandService) {

  }

  async create(createUserCommandDto: CreateUserCommandDto) : Promise<UserCommandAggregate> {

    let user = new UserCommand();
    user.email = createUserCommandDto.email;
    user.seed = createUserCommandDto.seed;
    user.appId = AppConfig.appId;

    return await this.userRepository
      .save(user)
      .then(async (u) => {
        this.logger.verbose(`Created User with email: '${u.email}' and id ${u.id}`)
        return await this
          .userEventCommandService
          .create(user, EventType.CREATED)
          .then(() => new UserCommandAggregate(user));
      })
      .catch(e => {
        this.logger.error('Error saving user: ', e);
        throw e;
      });

  }

}