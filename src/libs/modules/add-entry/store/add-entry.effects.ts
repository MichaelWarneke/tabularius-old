import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AddEntryActionTypes,
  AddInvoiceReceivableAction
} from './add-entry.actions';
import { switchMap, map, mapTo } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { JournalActions } from '@tabularius-libs/app-store';
import { Action } from '@ngrx/store';

@Injectable()
export class AddEntryEffects {
  @Effect()
  addEntry$: Observable<Action> = this.actions$.pipe(
    ofType<AddInvoiceReceivableAction>(
      AddEntryActionTypes.ADD_INVOICE_RECEIVABLE
    ),
    map(action => action.payload),
    map(journal => new JournalActions.AddJournal({ journal }))
  );

  constructor(private actions$: Actions) {}
}
