import { Action } from '@ngrx/store';
import { IJournal } from '@tabularius-libs/app-store';

export interface ActionWithPayload<P> extends Action {
  payload: P;
}
export function createAction<T extends Action>(type: T): Action;
export function createAction<T extends Action, P>(
  type: T,
  payload: P
): ActionWithPayload<P>;
export function createAction<T extends Action, P>(action: T, payload?: P) {
  return payload === undefined
    ? { type: action.type }
    : { type: action.type, payload };
}

export enum AddEntryActionTypes {
  ADD_INVOICE_RECEIVABLE = '[Add Entry Page] Add Invoice Receivable'
}

export const addInvoiceReceivableAction = (invoiceReceivable: IJournal) =>
  createAction(
    { type: AddEntryActionTypes.ADD_INVOICE_RECEIVABLE },
    invoiceReceivable
  );

/*
({
  type: AddEntryActionTypes.ADD_INVOICE_RECEIVABLE as typeof AddEntryActionTypes.ADD_INVOICE_RECEIVABLE,
  payload: { invoiceReceivable }
});
*/

export type AddInvoiceReceivableAction = ReturnType<
  typeof addInvoiceReceivableAction
>;

/*
export class AddInvoiceReceivableAction implements Action {
  constructor(public invoiceReceivable: IJournal) {}
  readonly type = AddEntryActionTypes.ADD_INVOICE_RECEIVABLE;
}
*/
export type AddEntryActions = AddInvoiceReceivableAction;
