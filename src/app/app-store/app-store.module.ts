import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app-store.effects';
import { CustomSerializer } from './router-state-serializer';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store App',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects])
    // Connects RouterModule with StoreModule
  ]
})
export class AppStoreModule {}
