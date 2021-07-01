import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UserQuery, UserQueryDocument, EventType } from '../entities/user-query.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { vars } from '../../config/vars';
import { UserQueryDto } from '../dto/user-query.dto';
import { CreateUserQueryCommand } from '../../cqrs/commands/create-user-query.command';
import { UserEventCommandAggregate } from 'src/cqrs/aggregates/user-event-command.aggregate';

@Injectable()
export class UserQueryService {

  private logger = new Logger('UserQueryService');

  constructor(
    @InjectModel(UserQuery.name)
    private UserQueryModel: Model<UserQueryDocument>) {

  }

  async create(createUserQueryCommand: CreateUserQueryCommand) : Promise<UserEventCommandAggregate> {
    const userModel = new this.UserQueryModel();
    userModel.id = createUserQueryCommand.userCommand.id;
    userModel.email = createUserQueryCommand.userCommand.email;
    userModel.seed = createUserQueryCommand.userCommand.seed;
    userModel.appId = vars.appId;
    userModel.currentStatus = EventType.SYNCRONIZED;

    return await userModel
      .save()
      .then(async (u) => {
        this.logger.verbose(`Created User on Mongo with email: '${u.email}'`);
        return new UserEventCommandAggregate(createUserQueryCommand.userCommand);
      });
  }

  async findAll() : Promise<UserQueryDto[]> {
    let userQueryDtoList = [];
    await this.UserQueryModel
      .find()
      .limit(10)
      .then(users => {
        users.forEach(u => 
          userQueryDtoList.push(this.toDto(u))
        )
    });
    return userQueryDtoList;
  }

  async findById(id: number) : Promise<UserQueryDto> {
    return await this
      .UserQueryModel
      .findOne({id})
      .then(user => this.toDto(user));

  }

  async findByEmail(email: string) : Promise<UserQueryDto> {
    
    return await this.UserQueryModel
      .findOne({email})
      .then(user => {
        if (user) {
          return this.toDto(user);
        }
        else {
          throw new NotFoundException(`User not found with email: '${email}'`)
        }
      });
    
  }

  private toDto(userQuery: UserQuery) : UserQueryDto {
    return new UserQueryDto(userQuery._id, userQuery.id, userQuery.email,userQuery.seed, userQuery.appId);
  }

  
}
