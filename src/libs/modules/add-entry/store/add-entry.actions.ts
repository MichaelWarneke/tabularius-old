import { Action } from '@ngrx/store';
import { Journal } from '@tabularius-libs/app-store';

export enum AddEntryActionTypes {
  AddInvoiceReceivable = '[Add Entry Page] Add Invoice Receivable'
}

export class AddInvoiceReceivable implements Action {
  constructor(readonly invoiceReceivable: Journal) {}
  readonly type = AddEntryActionTypes.AddInvoiceReceivable;
}

export type AddEntryActions = AddInvoiceReceivable;
