import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateUserCommandDto } from '../../user-command/dto/create-user-command.dto';
import { UserCommandService } from '../../user-command/service/user-command.service';

@CommandHandler(CreateUserCommandDto)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommandDto> {

  constructor(
    private readonly userCommandService: UserCommandService,
    private readonly publisher: EventPublisher) {
    
  }

  async execute(createUserCommandDto: CreateUserCommandDto) {
    
    const user = this.publisher.mergeObjectContext(
      await this.userCommandService.create(createUserCommandDto)
    );

    user.createOnQuery();    
    user.commit();

  }
  
}
