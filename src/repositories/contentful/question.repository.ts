import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {InterviewQuestion, InterviewQuestionRepository} from 'src/modules/question';
import {ContentfulClient} from 'src/modules/contentful';

import {QUESTION_CONTENT_TYPE} from './content-types';

@Injectable()
export class InterviewQuestionRepositoryContentful implements InterviewQuestionRepository {
    constructor(private client:ContentfulClient) {}

    getQuestions(query:string, limit:number, skip:number):Observable<InterviewQuestion[]> {
        return <Observable<InterviewQuestion[]>>
            this.client.getEntries<InterviewQuestion>(QUESTION_CONTENT_TYPE, true, query, limit, skip);
    }
}
