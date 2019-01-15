import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEntryContainerComponent } from './add-entry-container/add-entry-container.component';

const routes: Routes = [{ path: '', component: AddEntryContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEntryRoutingModule {}
