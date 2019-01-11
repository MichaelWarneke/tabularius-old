import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AddEntryActionTypes,
  AddEntryActions,
  AddInvoiceReceivable
} from './add-entry.actions';
import { switchMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { EntryActions } from '@tabularius-libs/app-store';
import { Action } from '@ngrx/store';

@Injectable()
export class AddEntryEffects {
  @Effect()
  addEntry$: Observable<Action> = this.actions$.pipe(
    ofType(AddEntryActionTypes.AddInvoiceReceivable),
    map(
      action =>
        new EntryActions.AddInvoiceReceivable((action as any).invoiceReceivable)
    )
  );

  constructor(private actions$: Actions) {}
}
