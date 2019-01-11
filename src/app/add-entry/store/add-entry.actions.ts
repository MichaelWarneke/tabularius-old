import { Action } from '@ngrx/store';
import { InvoiceReceivable } from '@tabularius-libs/shared';

export enum AddEntryActionTypes {
  AddInvoiceReceivable = '[Add Entry Page] Add Invoice Receivable'
}

export class AddInvoiceReceivable implements Action {
  constructor(readonly invoiceReceivable: InvoiceReceivable) {}
  readonly type = AddEntryActionTypes.AddInvoiceReceivable;
}

export type AddEntryActions = AddInvoiceReceivable;
