import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportContainerComponent } from './import-container/import-container.component';

const routes: Routes = [{ path: '', component: ImportContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule {}
