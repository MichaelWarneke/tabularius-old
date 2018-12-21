import { Action } from '@ngrx/store';

export enum AddEntryActionTypes {
  AddEntry = '[AddEntry] Add Entry',
  AddEntrySuccess = '[AddEntry] Add Entry Success',
  AddEntryError = '[AddEntry] Add Entry Error',
  NewEntry = '[AddEntry] New Entry'
}

export class AddEntry implements Action {
  readonly type = AddEntryActionTypes.AddEntry;
}

export class AddEntrySuccess implements Action {
  readonly type = AddEntryActionTypes.AddEntrySuccess;
}

export class AddEntryError implements Action {
  readonly type = AddEntryActionTypes.AddEntryError;
}

export class NewEntry implements Action {
  readonly type = AddEntryActionTypes.NewEntry;
}

export type AddEntryActions =
  | AddEntry
  | AddEntrySuccess
  | AddEntryError
  | NewEntry;
