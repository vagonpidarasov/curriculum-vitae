import {Component, ViewEncapsulation, Output, EventEmitter, Input} from '@angular/core';
import {SignInPayload} from 'src/modules/authentication';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent {
    @Input() isAuthenticated:boolean = false;
    @Output() signIn:EventEmitter<SignInPayload> = new EventEmitter();
    @Output() signOut:EventEmitter<null> = new EventEmitter();

    doSignIn() {
        this.signIn.emit({username: 'Batman', password: 'Alfred'});
    }

    doSignOut() {
        this.signOut.emit();
    }
}
