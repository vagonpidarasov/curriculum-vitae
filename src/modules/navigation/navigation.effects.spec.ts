import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Router} from '@angular/router';
import {ReplaySubject, Subscription} from 'rxjs';
import {Action} from 'src/modules/redux';
import {SetCurrentRoute} from './redux';
import {NavigationEffects} from './navigation.effects';

describe('NavigationEffects', () => {
    let effects:NavigationEffects;
    let actions:ReplaySubject<Action>;
    let sourceAction:Action;
    let subscription:Subscription;
    let router:Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NavigationEffects,
                provideMockActions(() => actions),
                {provide: Router, useValue: {navigateByUrl: jest.fn()}},
            ],
        });

        effects = TestBed.get(NavigationEffects);
        router = TestBed.get(Router);
        actions = new ReplaySubject(1);
    });

    afterEach(() => {
        if (subscription) {
            subscription.unsubscribe();
        }
    });

    it('navigates to customer route once SetCustomer is received', (done) => {
        const url = 'url';
        sourceAction = new SetCurrentRoute(url);
        actions.next(sourceAction);
        subscription = effects.SetCurrentRouteEffect$.subscribe(
            () => {
                expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
                expect(router.navigateByUrl).toHaveBeenCalledWith(url);
                done();
            }
        );
    });

});
