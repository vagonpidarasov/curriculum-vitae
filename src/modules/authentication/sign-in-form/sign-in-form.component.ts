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

import {Subscription, merge} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

import {SignInPayload} from '../types';

import {
    USERNAME_VALIDATION_PATTERN,
    PASSWORD_VALIDATION_PATTERN,
    USERNAME_MAX_LENGTH,
    USERNAME_MIN_LENGTH,
    PASSWORD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    USERNAME_DATA_NAME,
    PASSWORD_DATA_NAME,
} from './constants';

@Component({
    selector: 'sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: ['./sign-in-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent implements OnChanges, OnInit, OnDestroy {
    @Input() error:string = null;
    @Input() isInProgress:boolean = false;
    @Input() isAuthenticated:boolean = false;

    @Output() signInRequest:EventEmitter<SignInPayload> = new EventEmitter();
    @Output() resetErrorRequest:EventEmitter<null> = new EventEmitter();
    @Output() valueChanges:EventEmitter<SignInPayload> = new EventEmitter();

    signInForm:FormGroup;

    private subscription:Subscription;

    get usernameFormControl():AbstractControl {
        return this.signInForm.controls[USERNAME_DATA_NAME];
    }

    get passwordFormControl():AbstractControl {
        return this.signInForm.controls[PASSWORD_DATA_NAME];
    }

    get isUsernameMinLengthError():boolean {
        return this.usernameFormControl.hasError('minlength');
    }

    get isUsernameMaxLengthError():boolean {
        return this.usernameFormControl.hasError('maxlength');
    }

    get isPasswordMinLengthError():boolean {
        return this.passwordFormControl.hasError('minlength');
    }

    get isPasswordMaxLengthError():boolean {
        return this.passwordFormControl.hasError('maxlength');
    }

    get submitButtonDisabled():boolean {
        return this.signInForm.invalid || this.isInProgress;
    }

    constructor(formBuilder:FormBuilder) {
        this.signInForm = formBuilder.group({
            [USERNAME_DATA_NAME]: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern(USERNAME_VALIDATION_PATTERN),
                Validators.minLength(USERNAME_MIN_LENGTH),
                Validators.maxLength(USERNAME_MAX_LENGTH),
            ])),
            [PASSWORD_DATA_NAME]: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern(PASSWORD_VALIDATION_PATTERN),
                Validators.minLength(PASSWORD_MIN_LENGTH),
                Validators.maxLength(PASSWORD_MAX_LENGTH),
            ])),
        });
    }

    ngOnInit() {
        this.subscription = merge(
            this.usernameFormControl.valueChanges.pipe(distinctUntilChanged()),
            this.passwordFormControl.valueChanges.pipe(distinctUntilChanged())
        ).subscribe(
            () => {
                this.valueChanges.emit(this.signInForm.value);
                if (this.error) {
                    this.resetErrorRequest.emit(null);
                }
            }
        );
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    ngOnChanges(changes:SimpleChanges) {
        if (changes.isInProgress) {
            changes.isInProgress.currentValue ?
                this.signInForm.disable({onlySelf: false}) :
                this.signInForm.enable({onlySelf: false})
            ;
        }
    }

    submit() {
        if (this.signInForm.valid && !this.isAuthenticated && !this.isInProgress) {
            this.signInRequest.emit(this.signInForm.value);
        }
    }
}
