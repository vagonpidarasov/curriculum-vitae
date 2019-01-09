import {NgModule} from '@angular/core';

import {FirebaseRepositoryModule} from './firebase';
import {NavigatorRepositoryModule} from './navigator';

@NgModule({
    imports: [
        FirebaseRepositoryModule,
        NavigatorRepositoryModule,
    ],
})
export class RepositoriesModule {}
