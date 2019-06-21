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
    ViewChild,
    ElementRef,
    NgZone,
} from '@angular/core';

import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
    AbstractControl,
} from '@angular/forms';

import {Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';

export const QUERY_STRING_DATA_NAME = 'queryString';
export const QUERY_STRING_MIN_LENGTH = 0;
export const QUERY_STRING_DEBOUNCE_TIME = 500;

@Component({
    selector: 'query-string',
    templateUrl: './query-string.component.html',
    styleUrls: ['./query-string.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryStringComponent implements OnChanges, OnInit, OnDestroy {
    @Input() disabled:boolean = false;
    @Input() hasPrefix:boolean = false;
    @Input() hasButton:boolean = false;
    @Input() debounceTime:number = QUERY_STRING_DEBOUNCE_TIME;
    @Input() placeholder:string = 'Your Shoop da Whoop search';

    @Output() searchRequest:EventEmitter<string> = new EventEmitter();

    @ViewChild('mainInput') mainInput:ElementRef;

    queryStringForm:FormGroup;

    private subscription:Subscription;

    get queryStringFormControl():AbstractControl {
        return this.queryStringForm.controls[QUERY_STRING_DATA_NAME];
    }

    get submitButtonDisabled():boolean {
        return this.queryStringForm.invalid || this.disabled;
    }

    get hasValue():boolean {
        return !!this.queryStringFormControl.value;
    }

    constructor(private ngZone:NgZone, formBuilder:FormBuilder) {
        this.queryStringForm = formBuilder.group({
            [QUERY_STRING_DATA_NAME]: new FormControl(null, Validators.compose([
                Validators.minLength(QUERY_STRING_MIN_LENGTH),
            ])),
        });
    }

    ngOnInit() {
        this.subscription = this.queryStringFormControl.valueChanges.pipe(
            filter(v => v !== null),
            distinctUntilChanged(),
            debounceTime(this.debounceTime),
        ).subscribe((payload:string) => this.searchRequest.emit(payload));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnChanges(changes:SimpleChanges) {
        if (changes.disabled) {
            changes.disabled.currentValue ?
                this.queryStringForm.disable({onlySelf: false}) :
                this.queryStringForm.enable({onlySelf: false})
            ;
        }
    }

    clear() {
        this.queryStringFormControl.reset(null);
        this.searchRequest.emit(null);
        this.ngZone.runOutsideAngular(() =>
            setTimeout(() => this.mainInput.nativeElement.blur())
        );
    }

    submit() {
        this.searchRequest.emit(this.queryStringFormControl.value);
    }
}
