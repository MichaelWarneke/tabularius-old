import { Action } from '@ngrx/store';
import { InvoiceReceivable } from '@tabularius-libs/shared';

export enum EntryActionTypes {
  AddInvoiceReceivable = '[Api] Add Invoice Receivable',
  SuccessAddinvoiceReceivable = '[Api] Success Add Invoice Receivable',
  ErrorAddinvoiceReceivable = '[Api] Error Add Invoice Receivable'
}

export class AddInvoiceReceivable implements Action {
  readonly type = EntryActionTypes.AddInvoiceReceivable;
  constructor(entry: InvoiceReceivable) {}
}

export class SuccessAddinvoiceReceivable implements Action {
  readonly type = EntryActionTypes.SuccessAddinvoiceReceivable;
  constructor(status: string) {}
}

export class ErrorAddinvoiceReceivable implements Action {
  readonly type = EntryActionTypes.ErrorAddinvoiceReceivable;
  constructor(error: string) {}
}

export type AppActionsUnion =
  | AddInvoiceReceivable
  | SuccessAddinvoiceReceivable
  | ErrorAddinvoiceReceivable;
