import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {ReplaySubject, Subscription} from 'rxjs';
import {Action} from 'yet-another-redux-helpers';
import {SingInDialogEffects} from './sign-in-dialog.effects';
import {SignInDialogService} from './sign-in-dialog.service';
import {AuthenticationRequest, SignInSuccess, AuthenticationDiscard} from './redux';
import {UserData} from './types';

describe('SingInDialogEffects', () => {
    let effects:SingInDialogEffects;
    let actions:ReplaySubject<Action>;
    let sourceAction:Action;
    let subscription:Subscription;
    let signInDialogService:SignInDialogService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SingInDialogEffects,
                provideMockActions(() => actions),
                {provide: SignInDialogService, useValue: {
                    open: jest.fn(),
                    close: jest.fn(),
                }},
            ],
        });

        effects = TestBed.get(SingInDialogEffects);
        signInDialogService = TestBed.get(SignInDialogService);
        actions = new ReplaySubject(1);
    });

    afterEach(() => {
        if (subscription) {
            subscription.unsubscribe();
        }
    });

    it('opens sign-in dialog upon AuthenticationRequest', (done) => {
        sourceAction = new AuthenticationRequest();
        actions.next(sourceAction);
        subscription = effects.OpenDialogEffect$.subscribe(
            () => {
                expect(signInDialogService.open).toHaveBeenCalledTimes(1);
                done();
            }
        );
    });

    it('close sign-in dialog upon SignInSuccess', (done) => {
        sourceAction = new SignInSuccess(new UserData());
        actions.next(sourceAction);
        subscription = effects.CloseDialogEffect$.subscribe(
            () => {
                expect(signInDialogService.close).toHaveBeenCalledTimes(1);
                done();
            }
        );
    });

    it('close sign-in dialog upon AuthenticationDiscard', (done) => {
        sourceAction = new AuthenticationDiscard();
        actions.next(sourceAction);
        subscription = effects.CloseDialogEffect$.subscribe(
            () => {
                expect(signInDialogService.close).toHaveBeenCalledTimes(1);
                done();
            }
        );
    });

});
