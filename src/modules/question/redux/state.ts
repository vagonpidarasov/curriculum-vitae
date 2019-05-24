import {InterviewQuestion} from '../question.type';

export class QuestionState {
    questions:InterviewQuestion[] = [];
    inProgress:boolean = false;
    totalLength:number = 0;
    pageIndex:number = 0;
    pageSize:number = 10;
    searchQuery:string = null;
}
