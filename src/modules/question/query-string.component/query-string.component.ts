import {
    Component,
    Output,
    EventEmitter,
    Input,
    ChangeDetectionStrategy,
    SimpleChanges,
    OnChanges,
    OnInit,
    OnDestroy,
} from '@angular/core';

import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
    AbstractControl,
} from '@angular/forms';

import {Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, tap} from 'rxjs/operators';

export const QUERY_STRING_DATA_NAME = 'queryString';
export const QUERY_STRING_MIN_LENGTH = 3;

@Component({
    selector: 'query-string',
    templateUrl: './query-string.component.html',
    styleUrls: ['./query-string.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryStringComponent implements OnChanges, OnInit, OnDestroy {
    @Input() inProgress:boolean = false;
    @Output() searchRequest:EventEmitter<string> = new EventEmitter();

    queryStringForm:FormGroup;

    private subscription:Subscription;

    get queryStringFormControl():AbstractControl {
        return this.queryStringForm.controls[QUERY_STRING_DATA_NAME];
    }

    get submitButtonDisabled():boolean {
        return this.queryStringForm.invalid || this.inProgress;
    }

    get hasValue():boolean {
        return !!this.queryStringFormControl.value;
    }

    constructor(formBuilder:FormBuilder) {
        this.queryStringForm = formBuilder.group({
            [QUERY_STRING_DATA_NAME]: new FormControl(null, Validators.compose([
                // Validators.required,
                // Validators.minLength(QUERY_STRING_MIN_LENGTH),
            ])),
        });
    }

    ngOnInit() {
        this.subscription = this.queryStringFormControl.valueChanges.pipe(
            filter(v => v !== null),
            distinctUntilChanged(),
            debounceTime(500),
        ).subscribe((payload:string) => this.searchRequest.emit(payload));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnChanges(changes:SimpleChanges) {
        if (changes.inProgress) {
            changes.inProgress.currentValue ?
                this.queryStringForm.disable({onlySelf: false}) :
                this.queryStringForm.enable({onlySelf: false})
            ;
        }
    }

    clear() {
        this.queryStringFormControl.reset(null);
        this.searchRequest.emit(null);
    }

    submit() {
        this.searchRequest.emit(this.queryStringFormControl.value);
    }
}
