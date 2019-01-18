import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';
import {SignInFormComponent} from './sign-in-form.component';

describe('SignInFormComponent', () => {
    let fixture:ComponentFixture<SignInFormComponent>;
    let component:SignInFormComponent;
    let subscription:Subscription;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [SignInFormComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SignInFormComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        if (subscription) {
            subscription.unsubscribe();
            subscription = null;
        }
    });

    it('should invalidate form', () => {
        expect(component.signInForm.valid).toBeFalsy();
    });

    it('should validate form', () => {
        component.usernameFormControl.setValue('username');
        component.passwordFormControl.setValue('password');

        expect(component.signInForm.valid).toBeTruthy();
    });
});
