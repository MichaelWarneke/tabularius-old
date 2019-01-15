import { EntryActions } from '../actions';
import { InvoiceReceivable } from '@tabularius-libs/shared';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  invoiceReceivables: InvoiceReceivable[];
}

const initialState: State = {
  invoiceReceivables: []
};

export function reducer(
  state: State = initialState,
  action: EntryActions.AppActionsUnion
): State {
  switch (action.type) {
    case EntryActions.EntryActionTypes.ADD_INVOICE_RECEIVABLE:
      return {
        ...state,
        invoiceReceivables: [...state.invoiceReceivables, action.entry]
      };
    default:
      return state;
  }
}

export const getInvoiceReceivables = (state: State) => state.invoiceReceivables;
