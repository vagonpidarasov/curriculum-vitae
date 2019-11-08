import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {questions, inProgress, totalLength, pageSize, pageIndex} from './selectors';
import {SetPageIndex, SetSearchQuery} from './actions';
import {InterviewQuestion} from '../question.type';

@Injectable()
export class QuestionsStore {
    constructor(private store:Store<FeatureState>) {}

    get questions():Observable<InterviewQuestion[]> {
        return this.store.pipe(select(questions));
    }

    get totalLength():Observable<number> {
        return this.store.pipe(select(totalLength));
    }

    get pageSize():Observable<number> {
        return this.store.pipe(select(pageSize));
    }

    get pageIndex():Observable<number> {
        return this.store.pipe(select(pageIndex));
    }

    get inProgress():Observable<boolean> {
        return this.store.pipe(select(inProgress));
    }

    setPageIndex(index:number = 0):void {
        this.store.dispatch(new SetPageIndex(index));
    }

    setSearchQuery(query:string):void {
        this.store.dispatch(new SetSearchQuery(query));
    }
}
