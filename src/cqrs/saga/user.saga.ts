import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CreateUserQueryCommand } from '../commands/create-user-query.command';
import { SyncronizeUserCommand } from '../commands/syncronize-user-command';
import { CreateUserQueryEvent } from '../events/create-user-query.event';
import { SynchronizedUserEvent } from '../events/sincronized-user.event';

@Injectable()
export class UserSaga {

  @Saga()
  userCreated = (event$: Observable<any>) : Observable<ICommand> => {
    return event$
      .pipe(
        ofType(CreateUserQueryEvent),
        delay(1000),
        map((event) => {
          return new CreateUserQueryCommand(event.userCommand);
        })
      );

  }

  @Saga()
  userSynchronized = (event$: Observable<any>) : Observable<ICommand> => {
    return event$
      .pipe(
        ofType(SynchronizedUserEvent),
        delay(1000),
        map((event) => {
          return new SyncronizeUserCommand(event.userCommand);
        })
      );

  }

}