import { AppActions } from '../actions';
import { InvoiceReceivable } from '@tabularius-libs/shared';

export interface State {
  showMenu: boolean;
  invoiceReceivables: InvoiceReceivable[];
}

const initialState: State = {
  showMenu: false,
  invoiceReceivables: []
};

export function reducer(
  state: State = initialState,
  action: AppActions.AppActionsUnion
): State {
  switch (action.type) {
    case AppActions.AppActionTypes.ShowMenu:
      return {
        ...state,
        showMenu: true
      };
    case AppActions.AppActionTypes.HideMenu:
      return {
        ...state,
        showMenu: false
      };
    default:
      return state;
  }
}
