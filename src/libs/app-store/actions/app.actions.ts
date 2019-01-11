import { Action } from '@ngrx/store';

export enum AppActionTypes {
  ShowMenu = '[App] Show Menu',
  HideMenu = '[App] Hide Menu'
}

export class ShowMenu implements Action {
  readonly type = AppActionTypes.ShowMenu;
}

export class HideMenu implements Action {
  readonly type = AppActionTypes.HideMenu;
}

export type AppActionsUnion = ShowMenu | HideMenu;
