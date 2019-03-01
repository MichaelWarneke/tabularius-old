import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/add-entry.reducer';
import * as fromAction from '../store/add-entry.actions';
import * as fromAppStore from '@tabularius-libs/app-store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IJournal } from '@tabularius-libs/app-store';

@Component({
  selector: 'tabu-add-entry-container',
  templateUrl: './add-entry-container.component.html',
  styleUrls: ['./add-entry-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEntryContainerComponent implements OnInit {
  state$: Observable<string>;
  journal$: Observable<IJournal[]>;
  defaultCurrency$: Observable<string>;

  constructor(private store: Store<any>) {
    this.state$ = store.pipe(
      select(fromStore.selectAddEntryState),
      map(state => (state ? state : 'Nothing'))
    );
    this.journal$ = store.pipe(select(fromAppStore.getAllJournals));
    this.defaultCurrency$ = store.pipe(
      select(fromAppStore.getSettingsCurrency)
    );
  }

  addInvoiceReceivable(entry: IJournal) {
    entry.id = Date.now();
    this.store.dispatch(fromAction.addInvoiceReceivableAction(entry));
  }

  ngOnInit() {}
}
