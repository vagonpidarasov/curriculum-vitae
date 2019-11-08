import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

import {HeaderComponent} from './header.component';

// https://angular.io/guide/testing#component-inside-a-test-host
// https://github.com/angular/angular/issues/12313

describe('HeaderComponent', () => {
    let fixture:ComponentFixture<HeaderComponent>;
    let component:HeaderComponent;
    let debugElement:DebugElement;
    let signInButton:any;
    let signOutButton:any;
    let subscription:Subscription;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [
                CommonModule,
                RouterTestingModule,
            ],
            declarations: [HeaderComponent],
            // providers: [
            //     {provide: ComponentFixtureAutoDetect, useValue: true},
            // ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
    });

    afterEach(() => {
        if (subscription) {
            subscription.unsubscribe();
        }
    });

    it('should not show sign-in button', () => {
        fixture.detectChanges();
        signInButton = debugElement.query(By.css('button.sign-in-button'));
        signOutButton = debugElement.query(By.css('button.sign-out-button'));

        expect(signInButton).toBeNull();
        expect(signOutButton).toBeNull();
    });

    it('should show sign-out button when signed-in', () => {
        component.isAuthenticated = true;
        fixture.detectChanges();
        signOutButton = debugElement.query(By.css('button.sign-out-button')).nativeElement;
        signInButton = debugElement.query(By.css('button.sign-in-button'));

        expect(signOutButton.textContent).toEqual('Sign Out');
        expect(signInButton).toBeNull();
    });

    it.skip('should emit sign-in request when sign-in button is clicked', () => {
        let emitted = false;

        fixture.detectChanges();
        signInButton = debugElement.query(By.css('button.sign-in-button')).nativeElement;
        subscription = component.signInRequest.subscribe(() => emitted = true);
        signInButton.click();

        expect(emitted).toBeTruthy();
    });

    it('should emit sign-out request when sign-out button is clicked', () => {
        let emitted = false;

        component.isAuthenticated = true;
        fixture.detectChanges();
        signOutButton = debugElement.query(By.css('button.sign-out-button')).nativeElement;
        subscription = component.signOutRequest.subscribe(() => emitted = true);
        signOutButton.click();

        expect(emitted).toBeTruthy();
    });
});
