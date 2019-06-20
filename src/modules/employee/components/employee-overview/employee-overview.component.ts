import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {
    trigger,
    style,
    animate,
    transition,
    query,
    stagger,
    animateChild,
} from '@angular/animations';
import {Employee} from '../../models';

export const EXPERTISE_LIMIT = 10;

@Component({
    selector: 'employee-overview',
    templateUrl: './employee-overview.component.html',
    styleUrls: ['./employee-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('skill', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(-10px)' }),
                animate(
                    '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
                    style({ opacity: 1, transform: 'translateX(0px)' }),
                )
            ]),
        ]),
        trigger('skillset', [
            transition('* => *', [
                query(':enter', [
                    stagger(10, animateChild()),
                ]),
            ]),
        ]),
    ],
})
export class EmployeeOverviewComponent {
    @Input() employee:Employee = null;
    @Input() expertise:string[] = [];

    expertiseExpanded:boolean = false;
    expertiseLimit:number = EXPERTISE_LIMIT;

    get isToggleShown():boolean {
        return this.expertise.length > EXPERTISE_LIMIT;
    }

    toggleExpertise() {
        this.expertiseLimit = this.expertiseExpanded ? EXPERTISE_LIMIT : this.expertise.length;
        this.expertiseExpanded = !this.expertiseExpanded;
    }
}
