import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dash',
    loadChildren: '@tabularius-libs/modules/dash/dash.module#DashModule'
  },
  {
    path: 'add',
    loadChildren:
      '@tabularius-libs/modules/add-entry/add-entry.module#AddEntryModule'
  },
  { path: '', redirectTo: '/dash', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
