import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Store} from '@ngrx/store';
import {ReplaySubject} from 'rxjs';

import {Action} from 'src/modules/redux';

import {SignInEffects} from './sign-in.effects';
import {SignIn, SetProgress, SignInSuccess} from './actions';
import {AuthenticationRepository} from '../authentication.repository';
import {AuthenticationRepositoryStub} from '../authentication.repository.stub';
import {SignInDialogService} from '../sign-in-dialog.service';
import {UserData} from '../types';

describe('AuthenticationEffects', () => {
    let effects:SignInEffects;
    let actions:ReplaySubject<Action>;
    let sourceAction:Action;
    let effectAction:Action;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                SignInEffects,
                provideMockActions(() => actions),
                {provide: AuthenticationRepository, useClass: AuthenticationRepositoryStub},
                {provide: Store, useValue: {}},
                {provide: SignInDialogService, useValue: {}},
            ],
        });

        effects = TestBed.get(SignInEffects);
        actions = new ReplaySubject(1);
    });

    it('should emit SetProgress:true action in response to SignIn action', () => {
        sourceAction = new SignIn({username: 'username', password: 'password'});
        effectAction = new SetProgress(true);
        actions.next(sourceAction);

        effects.SetProgressEffect$.subscribe(
            (result:Action) => expect(result).toEqual(effectAction)
        );
    });

    it('should emit SignInSuccess action in response to SignIn action', () => {
        const username:string = 'username';
        const password:string = 'password';
        sourceAction = new SignIn({username, password});
        effectAction = new SignInSuccess(Object.assign(new UserData(), {username}));
        actions.next(sourceAction);

        effects.SignInEffect$.subscribe(
            (result:Action) => expect(result).toEqual(effectAction)
        );
    });
});
