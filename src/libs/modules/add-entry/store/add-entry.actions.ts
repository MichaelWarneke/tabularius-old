import { Action } from '@ngrx/store';
import { IJournal } from '@tabularius-libs/app-store';

export enum AddEntryActionTypes {
  AddInvoiceReceivableAction = '[Add Entry Page] Add Invoice Receivable'
}

export class AddInvoiceReceivableAction implements Action {
  constructor(public invoiceReceivable: IJournal) {}
  readonly type = AddEntryActionTypes.AddInvoiceReceivableAction;
}

export type AddEntryActions = AddInvoiceReceivableAction;
