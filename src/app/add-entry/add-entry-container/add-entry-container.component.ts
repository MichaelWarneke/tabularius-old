import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/add-entry.reducer';
import * as fromAction from '../store/add-entry.actions';
import * as fromAppStore from '@tabularius-libs/app-store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InvoiceReceivable } from '@tabularius-libs/shared';

@Component({
  selector: 'tabu-add-entry-container',
  templateUrl: './add-entry-container.component.html',
  styleUrls: ['./add-entry-container.component.css']
})
export class AddEntryContainerComponent implements OnInit {
  state$: Observable<string>;
  invoiceReceivables$: Observable<InvoiceReceivable[]>;

  constructor(private store: Store<any>) {
    this.state$ = store.pipe(
      select(fromStore.selectAddEntryState),
      map(state => (state ? state : 'Nothing'))
    );
    this.invoiceReceivables$ = store.pipe(
      select(fromAppStore.getInvoiceReceivablesState),
      map(state => (state ? state : []))
    );
  }

  addInvoiceReceivable(entry: InvoiceReceivable) {
    console.log('Entry :', entry);
    this.store.dispatch(new fromAction.AddInvoiceReceivable(entry));
  }

  ngOnInit() {}
}
