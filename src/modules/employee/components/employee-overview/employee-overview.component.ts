import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {trigger, style, animate, transition, query, stagger, animateChild} from '@angular/animations';
import {Employee} from '../../employee.model';

export const EXPERTISE_LIMIT = 6;

@Component({
    selector: 'employee-overview',
    templateUrl: './employee-overview.component.html',
    styleUrls: ['./employee-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('skill', [
            transition(':enter', [
                style({opacity: 0, transform: 'translateX(-10px)'}),
                animate(
                    '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
                    style({opacity: 1, transform: 'translateX(0px)'}),
                )
            ]),
        ]),
        trigger('skillset', [
            transition('* => *', [
                query(':enter', [stagger(10, animateChild())], {optional: true}),
            ]),
        ]),
    ],
})
export class EmployeeOverviewComponent implements OnChanges {
    @Input() employee:Employee = null;
    @Input() expertise:string[] = [];

    match:boolean[] = [];
    expertiseExpanded:boolean = false;
    expertiseLimit:number = EXPERTISE_LIMIT;

    constructor(private changeDetectorRef:ChangeDetectorRef) {}

    get isToggleShown():boolean {
        return this.expertise.length > EXPERTISE_LIMIT;
    }

    ngOnChanges(changes:SimpleChanges) {
        if (changes.expertise) {
            this.match = this.expertise.map(() => false);
        }
    }

    search(q:string) {
        const searchQuery = q ? q.toLowerCase().trim() : null;
        this.match = this.expertise.map((skill:string) => skill.toLowerCase().trim().search(searchQuery) >= 0);
        if (this.match.lastIndexOf(true) > this.expertiseLimit) {
            this.openExpertise();
        }
        this.changeDetectorRef.markForCheck();
    }

    openExpertise() {
        this.expertiseLimit = this.expertise.length;
        this.expertiseExpanded = true;
    }

    toggleExpertise() {
        this.expertiseLimit = this.expertiseExpanded ? EXPERTISE_LIMIT : this.expertise.length;
        this.expertiseExpanded = !this.expertiseExpanded;
    }
}
