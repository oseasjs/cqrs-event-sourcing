import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateUserQueryCommand } from './create-user-query.command';
import { UserQueryService } from '../../user-query/service/user-query.service';

@CommandHandler(CreateUserQueryCommand)
export class CreateUserQueryHandler implements ICommandHandler<CreateUserQueryCommand> {

  constructor(
    private readonly userQueryService: UserQueryService,
    private readonly publisher: EventPublisher) {
    
  }

  async execute(createUserQueryCommand: CreateUserQueryCommand) {
    
    const user = await this.publisher.mergeObjectContext(
      await this.userQueryService.create(
        createUserQueryCommand
      )
    );
    
    user.addSynchronizedStatus();

    user.commit();

  }
  
}
