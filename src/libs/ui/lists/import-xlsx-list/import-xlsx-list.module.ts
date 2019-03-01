import { NgModule } from '@angular/core';
import { ImportXlsxListComponent } from './import-xlsx-list.component';
import { SharedModule } from '@tabularius-libs/shared';

@NgModule({
  declarations: [ImportXlsxListComponent],
  imports: [SharedModule],
  exports: [ImportXlsxListComponent]
})
export class ImportXlsxListModule {}
