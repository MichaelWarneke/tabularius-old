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
    case AddEntryActionTypes.AddEntrySuccess:
      return { ...state, addEntryState: 'Success' };

    case AddEntryActionTypes.AddEntryError:
      return { ...state, addEntryState: 'Error' };

    case AddEntryActionTypes.AddEntry:
      return { ...state, addEntryState: 'Sending' };

    case AddEntryActionTypes.NewEntry:
      return { ...state, addEntryState: 'Init' };

    default:
      return state;
  }
}

export const selectFeature = createFeatureSelector<State>('addEntry');

export const selectAddEntryState = createSelector(
  selectFeature,
  (state: State) => state.addEntryState
);
