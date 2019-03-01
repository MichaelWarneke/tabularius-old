import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ImportXlsx } from './import-xlsx.model';

export enum ImportXlsxActionTypes {
  LoadImportXlsxs = '[ImportXlsx] Load ImportXlsxs',
  AddImportXlsx = '[ImportXlsx] Add ImportXlsx',
  UpsertImportXlsx = '[ImportXlsx] Upsert ImportXlsx',
  AddImportXlsxs = '[ImportXlsx] Add ImportXlsxs',
  UpsertImportXlsxs = '[ImportXlsx] Upsert ImportXlsxs',
  UpdateImportXlsx = '[ImportXlsx] Update ImportXlsx',
  UpdateImportXlsxs = '[ImportXlsx] Update ImportXlsxs',
  DeleteImportXlsx = '[ImportXlsx] Delete ImportXlsx',
  DeleteImportXlsxs = '[ImportXlsx] Delete ImportXlsxs',
  ClearImportXlsxs = '[ImportXlsx] Clear ImportXlsxs'
}

export class LoadImportXlsxs implements Action {
  readonly type = ImportXlsxActionTypes.LoadImportXlsxs;

  constructor(public payload: { importXlsxs: ImportXlsx[] }) {}
}

export class AddImportXlsx implements Action {
  readonly type = ImportXlsxActionTypes.AddImportXlsx;

  constructor(public payload: { importXlsx: ImportXlsx }) {}
}

export class UpsertImportXlsx implements Action {
  readonly type = ImportXlsxActionTypes.UpsertImportXlsx;

  constructor(public payload: { importXlsx: ImportXlsx }) {}
}

export class AddImportXlsxs implements Action {
  readonly type = ImportXlsxActionTypes.AddImportXlsxs;

  constructor(public payload: { importXlsxs: ImportXlsx[] }) {}
}

export class UpsertImportXlsxs implements Action {
  readonly type = ImportXlsxActionTypes.UpsertImportXlsxs;

  constructor(public payload: { importXlsxs: ImportXlsx[] }) {}
}

export class UpdateImportXlsx implements Action {
  readonly type = ImportXlsxActionTypes.UpdateImportXlsx;

  constructor(public payload: { importXlsx: Update<ImportXlsx> }) {}
}

export class UpdateImportXlsxs implements Action {
  readonly type = ImportXlsxActionTypes.UpdateImportXlsxs;

  constructor(public payload: { importXlsxs: Update<ImportXlsx>[] }) {}
}

export class DeleteImportXlsx implements Action {
  readonly type = ImportXlsxActionTypes.DeleteImportXlsx;

  constructor(public payload: { id: string }) {}
}

export class DeleteImportXlsxs implements Action {
  readonly type = ImportXlsxActionTypes.DeleteImportXlsxs;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearImportXlsxs implements Action {
  readonly type = ImportXlsxActionTypes.ClearImportXlsxs;
}

export type ImportXlsxActions =
 LoadImportXlsxs
 | AddImportXlsx
 | UpsertImportXlsx
 | AddImportXlsxs
 | UpsertImportXlsxs
 | UpdateImportXlsx
 | UpdateImportXlsxs
 | DeleteImportXlsx
 | DeleteImportXlsxs
 | ClearImportXlsxs;
