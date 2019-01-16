import { AppActions } from '../actions';

export interface State {
  showMenu: boolean;
}

const initialState: State = {
  showMenu: false
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

export const selectShowMenu = (state: State) => state.showMenu;
