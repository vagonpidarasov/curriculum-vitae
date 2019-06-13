import {NgModule} from '@angular/core';

import {ContentfulModule, CONTENTFUL_CONFIG} from 'src/modules/contentful';
import {EmployeeRepository} from 'src/modules/employee';
import {InterviewQuestionRepository} from 'src/modules/question';
import {LinksRepository} from 'src/modules/image-links';

import {EmployeeRepositoryContentful} from './employee.repository';
import {InterviewQuestionRepositoryContentful} from './question.repository';
import {LinksRepositoryContentful} from './links.repository';

import {config} from './config';

@NgModule({
    imports: [ContentfulModule],
    providers: [
        {provide: CONTENTFUL_CONFIG, useValue: config},
        {provide: EmployeeRepository, useClass: EmployeeRepositoryContentful},
        {provide: InterviewQuestionRepository, useClass: InterviewQuestionRepositoryContentful},
        {provide: LinksRepository, useClass: LinksRepositoryContentful},
    ],
})
export class ContentfulRepositoryModule {}
