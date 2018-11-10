import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

import {SignInDialogComponent} from './sign-in-dialog';

@Injectable()
export class SignInDialogService {
    private dialogRef:MatDialogRef<SignInDialogComponent>;

    constructor(private dialog:MatDialog) {}

    open() {
        this.dialogRef = this.dialog.open(SignInDialogComponent, {disableClose: true});
    }

    close() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }
}
