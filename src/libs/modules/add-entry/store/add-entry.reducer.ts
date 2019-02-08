import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { AddEntryActions, AddEntryActionTypes } from './add-entry.actions';

export interface State {
  addEntryState: 'Init' | 'Sending' | 'Error' | 'Success';
}

export const initialState: State = {
  addEntryState: 'Init'
};

export function reducer(state = initialState, action: AddEntryActions): State {
  switch (action.type) {
    case AddEntryActionTypes.ADD_INVOICE_RECEIVABLE:
      return { ...state, addEntryState: 'Sending' };
    default:
      return state;
  }
}

export const selectFeature = createFeatureSelector<State>('addEntry');

export const selectAddEntryState = createSelector(
  selectFeature,
  (state: State) => state.addEntryState
);
