import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
} from '@angular/material';

import {QueryStringComponent} from './query-string.component';

export const MatModules = [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ...MatModules,
    ],
    exports: [
        QueryStringComponent
    ],
    declarations: [
        QueryStringComponent,
    ],
})
export class QueryStringModule {}
