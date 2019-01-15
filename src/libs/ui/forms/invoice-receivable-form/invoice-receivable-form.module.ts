import { NgModule } from '@angular/core';
import { InvoiceReceivableFormComponent } from './invoice-receivable-form.component';
import { SharedModule } from '@tabularius-libs/shared';

@NgModule({
  declarations: [InvoiceReceivableFormComponent],
  imports: [SharedModule],
  exports: [InvoiceReceivableFormComponent]
})
export class InvoiceReceivableFormModule {}
