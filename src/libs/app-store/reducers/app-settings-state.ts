import { AppSettingsActions } from '../actions';

export interface State {
  currency: string;
}

const initialState: State = {
  currency: 'AUD'
};

export function reducer(
  state: State = initialState,
  action: AppSettingsActions.AppSettingsActionsUnion
): State {
  switch (action.type) {
    default:
      return state;
  }
}

export const selectCurrency = (state: State) => state.currency;
