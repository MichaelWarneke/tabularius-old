import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEntryRoutingModule } from './add-entry-routing.module';
import { AddEntryComponent } from './add-entry.component';

@NgModule({
  declarations: [AddEntryComponent],
  imports: [
    CommonModule,
    AddEntryRoutingModule
  ]
})
export class AddEntryModule { }
