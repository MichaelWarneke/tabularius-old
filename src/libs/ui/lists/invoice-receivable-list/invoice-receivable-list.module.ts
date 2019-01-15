import { NgModule } from '@angular/core';
import { InvoiceReceivableListComponent } from './invoice-receivable-list.component';
import { SharedModule } from '@tabularius-libs/shared';

@NgModule({
  declarations: [InvoiceReceivableListComponent],
  imports: [SharedModule],
  exports: [InvoiceReceivableListComponent]
})
export class InvoiceReceivableListModule {}
