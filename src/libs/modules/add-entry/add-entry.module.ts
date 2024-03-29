import { NgModule } from '@angular/core';

import { AddEntryRoutingModule } from './add-entry-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAddEntry from './store/add-entry.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AddEntryEffects } from './store/add-entry.effects';
import { AddEntryContainerComponent } from './add-entry-container/add-entry-container.component';

import { SharedModule } from '@tabularius-libs/shared';
import { InvoiceReceivableListModule } from '@tabularius-libs/ui';
import { InvoiceReceivableFormModule } from '@tabularius-libs/ui';

@NgModule({
  declarations: [AddEntryContainerComponent],
  imports: [
    SharedModule,
    AddEntryRoutingModule,
    StoreModule.forFeature('addEntry', fromAddEntry.reducer),
    EffectsModule.forFeature([AddEntryEffects]),
    InvoiceReceivableListModule,
    InvoiceReceivableFormModule
  ]
})
export class AddEntryModule {}
