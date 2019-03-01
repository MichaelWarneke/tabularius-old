import { NgModule } from '@angular/core';

import { ImportRoutingModule } from './import-routing.module';
import { ImportContainerComponent } from './import-container/import-container.component';

import { SharedModule } from '@tabularius-libs/shared';
import { ImportXlsxFormModule } from '@tabularius-libs/ui/forms';
import { ImportXlsxService } from './services/import-xlsx.service';
import { StoreModule } from '@ngrx/store';
import * as fromImport from './store/reducers';
import { ImportXlsxListModule } from '@tabularius-libs/ui';

@NgModule({
  declarations: [ImportContainerComponent],
  imports: [
    SharedModule,
    ImportRoutingModule,
    ImportXlsxFormModule,
    ImportXlsxListModule,
    StoreModule.forFeature('import', fromImport.reducers)
  ],
  providers: [ImportXlsxService]
})
export class ImportModule {}
