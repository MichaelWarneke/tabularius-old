import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-AU' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
