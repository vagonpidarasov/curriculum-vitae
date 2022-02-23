import {Component, Output, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';
import {Employee} from '../../employee';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent  {
    @Input() isAuthenticated:boolean = false;
    @Input() employee:Employee = null;
    @Output() signInRequest:EventEmitter<null> = new EventEmitter();
    @Output() signOutRequest:EventEmitter<null> = new EventEmitter();

    signIn() {
        this.signInRequest.emit();
    }

    signOut() {
        this.signOutRequest.emit();
    }
}
