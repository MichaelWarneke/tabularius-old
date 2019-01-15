import { Action } from '@ngrx/store';
import { InvoiceReceivable } from '@tabularius-libs/shared';

export enum EntryActionTypes {
  ADD_INVOICE_RECEIVABLE = '[Api] Add Invoice Receivable',
  ADD_INVOICE_RECEIVABLE_SUCCESS = '[Api] Success Add Invoice Receivable',
  ADD_INVOICE_RECEIVABLE_ERROR = '[Api] Error Add Invoice Receivable'
}

export class AddInvoiceReceivable implements Action {
  readonly type = EntryActionTypes.ADD_INVOICE_RECEIVABLE;
  constructor(readonly entry: InvoiceReceivable) {}
}

export class SuccessAddinvoiceReceivable implements Action {
  readonly type = EntryActionTypes.ADD_INVOICE_RECEIVABLE_SUCCESS;
  constructor(readonly status: string) {}
}

export class ErrorAddinvoiceReceivable implements Action {
  readonly type = EntryActionTypes.ADD_INVOICE_RECEIVABLE_ERROR;
  constructor(readonly error: string) {}
}

export type AppActionsUnion =
  | AddInvoiceReceivable
  | SuccessAddinvoiceReceivable
  | ErrorAddinvoiceReceivable;
