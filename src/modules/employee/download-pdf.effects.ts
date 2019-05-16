import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {tap, withLatestFrom} from 'rxjs/operators';

import {Action, NoDispatchMetadada} from 'src/modules/redux';
import {SAVE_AS_PDF, FeatureState, EmployeeState} from './redux';
import {downloadPDF} from './download-pdf';

@Injectable()
export class DownloadPDFEffects {
    constructor(
        private actions$:Actions,
        private store:Store<FeatureState>,
    ) {}

    @Effect(NoDispatchMetadada) SetBodyBackgroundEffect$ = this.actions$.pipe(
        ofType(SAVE_AS_PDF),
        withLatestFrom(this.store, (a:Action, s:FeatureState) => s.employee),
        tap((employeeState:EmployeeState) => downloadPDF(
            employeeState.employee,
            employeeState.education,
            employeeState.expertise,
            employeeState.currentPosition,
            employeeState.experience,
        )),
    );
}
