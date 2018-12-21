import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AddEntryActionTypes, AddEntrySuccess } from './add-entry.actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AddEntryEffects {
  @Effect()
  addEntry$ = this.actions$.pipe(
    ofType(AddEntryActionTypes.AddEntry),
    switchMap(() => of(new AddEntrySuccess()))
  );

  constructor(private actions$: Actions) {}
}
