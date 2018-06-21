import {Component, Output, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
    AbstractControl,
} from '@angular/forms';

import {SignInPayload} from 'src/modules/authentication';

import {
    USERNAME_VALIDATION_REGEXP,
    PASSWORD_VALIDATION_REGEXP,
    USERNAME_MAX_LENGTH,
    USERNAME_MIN_LENGTH,
    PASSWORD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    USERNAME_DATA_NAME,
    PASSWORD_DATA_NAME,
} from '../constants';

@Component({
    selector: 'sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: ['./sign-in-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent {
    @Input() error:string = null;
    @Input() isInProgress:boolean = false;

    @Output() signInRequest:EventEmitter<SignInPayload> = new EventEmitter();

    signInForm:FormGroup;

    usernameMinLength:number = USERNAME_MIN_LENGTH;
    usernameMaxLength:number = USERNAME_MAX_LENGTH;
    passwordMinLength:number = PASSWORD_MIN_LENGTH;
    passwordMaxLength:number = PASSWORD_MAX_LENGTH;

    private usernameFormControlName:string = USERNAME_DATA_NAME;
    private passwordFormControlName:string = PASSWORD_DATA_NAME;

    private get usernameFormControl():AbstractControl {
        return this.signInForm.controls[this.usernameFormControlName];
    }

    private get passwordFormControl():AbstractControl {
        return this.signInForm.controls[this.passwordFormControlName];
    }

    get isUsernameMinLengthError():boolean {
        return this.usernameFormControl.hasError('minlength');
    }

    get isPasswordMinLengthError():boolean {
        return this.passwordFormControl.hasError('minlength');
    }

    constructor(formBuilder:FormBuilder) {
        this.signInForm = formBuilder.group({
            [this.usernameFormControlName]: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern(USERNAME_VALIDATION_REGEXP),
                // () => this.signInError ? {external: true} : null
            ])),
            [this.passwordFormControlName]: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern(PASSWORD_VALIDATION_REGEXP),
                // () => this.signInError ? {external: true} : null
            ])),
        });
    }

    submit() {
        if (this.signInForm.valid) {
            this.signInRequest.emit(this.signInForm.value);
        }
    }
}
