import { NgModule } from '@angular/core';
import { ImportXlsxFormComponent } from './import-xlsx-form/import-xlsx-form.component';
import { SharedModule } from '@tabularius-libs/shared';

@NgModule({
  declarations: [ImportXlsxFormComponent],
  imports: [SharedModule],
  exports: [ImportXlsxFormComponent]
})
export class ImportXlsxFormModule {}
