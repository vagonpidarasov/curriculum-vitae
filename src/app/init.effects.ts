import {Injectable} from '@angular/core';
import {INIT} from '@ngrx/store';
import {Effect} from '@ngrx/effects';
import {Observable, of, defer} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class InitEffects {
    /**
     * @Effect emits INIT action
     */
    @Effect() InitActionEffect$:Observable<{type:typeof INIT}> = defer(() => of({type: INIT}).pipe(delay(1)));
}
