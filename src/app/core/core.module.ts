import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';

import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from '../material/material.module';
import { AppStoreModule } from '../app-store/app-store.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AppStoreModule,
    LayoutModule,
    MaterialModule
  ],
  exports: [NavComponent]
})
export class CoreModule {}
