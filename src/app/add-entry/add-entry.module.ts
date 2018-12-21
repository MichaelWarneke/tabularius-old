import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEntryRoutingModule } from './add-entry-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAddEntry from './store/add-entry.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AddEntryEffects } from './store/add-entry.effects';
import { AddEntryContainerComponent } from './add-entry-container/add-entry-container.component';
import { AddEntryFormComponent } from './add-entry-form/add-entry-form.component';
import {
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  declarations: [AddEntryContainerComponent, AddEntryFormComponent],
  imports: [
    CommonModule,
    AddEntryRoutingModule,
    StoreModule.forFeature('addEntry', fromAddEntry.reducer),
    EffectsModule.forFeature([AddEntryEffects]),
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule]
})
export class AddEntryModule {}
