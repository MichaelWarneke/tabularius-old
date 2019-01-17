import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';

import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { AppStoreModule } from '@tabularius-libs/app-store';
import { SharedModule } from '@tabularius-libs/shared';
import { ApiModule } from '@tabularius-libs/api';

@NgModule({
  declarations: [NavComponent],
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AppStoreModule,
    LayoutModule,
    ApiModule
  ],
  exports: [NavComponent]
})
export class CoreModule {}
