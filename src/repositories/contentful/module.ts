import {NgModule} from '@angular/core';

import {ContentfulModule, CONTENTFUL_CONFIG} from 'src/modules/contentful';
import {EmployeeRepository} from 'src/modules/employee';
import {EmployeeRepositoryContentful} from './employee.repository';
import {config} from './config';

@NgModule({
    imports: [ContentfulModule],
    providers: [
        {provide: CONTENTFUL_CONFIG, useValue: config},
        {provide: EmployeeRepository, useClass: EmployeeRepositoryContentful},
    ],
})
export class ContentfulRepositoryModule {}
