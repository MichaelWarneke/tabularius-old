import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IJournal } from './journal.model';

export enum JournalActionTypes {
  LoadJournals = '[API Journal] Load Journals',
  AddJournal = '[API Journal] Add Journal',
  UpsertJournal = '[API Journal] Upsert Journal',
  AddJournals = '[API Journal] Add Journals',
  UpsertJournals = '[API Journal] Upsert Journals',
  UpdateJournal = '[API Journal] Update Journal',
  UpdateJournals = '[API Journal] Update Journals',
  DeleteJournal = '[API Journal] Delete Journal',
  DeleteJournals = '[API Journal] Delete Journals',
  ClearJournals = '[API Journal] Clear Journals'
}

export class LoadJournals implements Action {
  readonly type = JournalActionTypes.LoadJournals;

  constructor(public payload: { journals: IJournal[] }) {}
}

export class AddJournal implements Action {
  readonly type = JournalActionTypes.AddJournal;

  constructor(public payload: { journal: IJournal }) {}
}

export class UpsertJournal implements Action {
  readonly type = JournalActionTypes.UpsertJournal;

  constructor(public payload: { journal: IJournal }) {}
}

export class AddJournals implements Action {
  readonly type = JournalActionTypes.AddJournals;

  constructor(public payload: { journals: IJournal[] }) {}
}

export class UpsertJournals implements Action {
  readonly type = JournalActionTypes.UpsertJournals;

  constructor(public payload: { journals: IJournal[] }) {}
}

export class UpdateJournal implements Action {
  readonly type = JournalActionTypes.UpdateJournal;

  constructor(public payload: { journal: Update<IJournal> }) {}
}

export class UpdateJournals implements Action {
  readonly type = JournalActionTypes.UpdateJournals;

  constructor(public payload: { journals: Update<IJournal>[] }) {}
}

export class DeleteJournal implements Action {
  readonly type = JournalActionTypes.DeleteJournal;

  constructor(public payload: { id: string }) {}
}

export class DeleteJournals implements Action {
  readonly type = JournalActionTypes.DeleteJournals;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearJournals implements Action {
  readonly type = JournalActionTypes.ClearJournals;
}

export type JournalActions =
  | LoadJournals
  | AddJournal
  | UpsertJournal
  | AddJournals
  | UpsertJournals
  | UpdateJournal
  | UpdateJournals
  | DeleteJournal
  | DeleteJournals
  | ClearJournals;
