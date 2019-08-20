import {Injectable} from '@angular/core';
import {INIT} from '@ngrx/store';
import {Effect} from '@ngrx/effects';
import {Observable, of, defer} from 'rxjs';
import {Action} from './types';

@Injectable()
export class InitEffects {
    /**
     * @Effect emits INIT action
     */
    @Effect() InitActionEffect$:Observable<Action> = defer(() => of({type: INIT}));
}
