import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AuthenticationRepository} from 'src/modules/authentication';
import {AuthenticationRepositoryHttp} from './authentication.repository';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        {provide: AuthenticationRepository, useClass: AuthenticationRepositoryHttp},
    ],
})
export class HttpRepositoryModule {}
