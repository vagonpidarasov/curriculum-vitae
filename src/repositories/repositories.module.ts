import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {AuthenticationRepository} from 'src/modules/authentication';
import {AuthenticationHttpRepository} from './http/authentication.http-repository';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        {provide: AuthenticationRepository, useClass:AuthenticationHttpRepository},
    ],
})
export class RepositoriesModule {}
