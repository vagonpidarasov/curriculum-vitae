import {Observable} from 'rxjs';
import {InterviewQuestion} from './question.type';

export abstract class InterviewQuestionRepository {
    abstract getQuestions(query:string, limit:number, skip:number):Observable<InterviewQuestion[]>;
}
