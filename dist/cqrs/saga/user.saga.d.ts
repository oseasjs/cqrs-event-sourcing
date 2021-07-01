import { ICommand } from "@nestjs/cqrs";
import { Observable } from 'rxjs';
export declare class UserSaga {
    userCreated: (event$: Observable<any>) => Observable<ICommand>;
    userSynchronized: (event$: Observable<any>) => Observable<ICommand>;
}
