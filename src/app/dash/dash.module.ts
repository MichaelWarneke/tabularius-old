import { NgModule } from '@angular/core';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { SharedModule } from '@tabularius-libs/shared';

@NgModule({
  declarations: [DashComponent],
  imports: [SharedModule, DashRoutingModule]
})
export class DashModule {}
