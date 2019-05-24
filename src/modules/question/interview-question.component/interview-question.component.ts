import {Component, Input, Output, EventEmitter,} from '@angular/core';
import {InterviewQuestion} from '../question.type';

@Component({
    selector: 'interview-question',
    templateUrl: './interview-question.component.html',
    styleUrls: ['./interview-question.component.scss'],
})
export class InterviewQuestionComponent {
    @Input() interviewQuestion:InterviewQuestion = null;
    @Output() keywordClick:EventEmitter<string> = new EventEmitter();
}
