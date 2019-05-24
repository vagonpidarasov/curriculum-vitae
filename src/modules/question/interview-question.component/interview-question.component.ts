import {Component, Input} from '@angular/core';
import {InterviewQuestion} from '../question.type';

@Component({
    selector: 'interview-question',
    templateUrl: './interview-question.component.html',
    styleUrls: ['./interview-question.component.scss'],
})
export class InterviewQuestionComponent {
    @Input() interviewQuestion:InterviewQuestion = null;
}
