import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEntryRoutingModule } from './add-entry-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAddEntry from './store/add-entry.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AddEntryEffects } from './store/add-entry.effects';
import { AddEntryContainerComponent } from './add-entry-container/add-entry-container.component';

import { InvoiceReceivableFormComponent } from './invoice-receivable-form/invoice-receivable-form.component';
import { InvoicePayableFormComponent } from './invoice-payable-form/invoice-payable-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddEntryContainerComponent,
    InvoiceReceivableFormComponent,
    InvoicePayableFormComponent
  ],
  imports: [
    SharedModule,
    AddEntryRoutingModule,
    StoreModule.forFeature('addEntry', fromAddEntry.reducer),
    EffectsModule.forFeature([AddEntryEffects])
  ]
})
export class AddEntryModule {}
