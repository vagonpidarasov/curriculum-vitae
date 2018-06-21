import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {SignInDialogComponent} from './sign-in-dialog.component';

@Injectable()
export class SignInDialogService {
    private dialogRef:MatDialogRef<SignInDialogComponent>;
    constructor(private dialog:MatDialog) {}

    open():void {
        this.dialogRef = this.dialog.open(SignInDialogComponent);
    }
}
