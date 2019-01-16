import { Action } from '@ngrx/store';

export enum AppSettingsActionTypes {
  ShowMenu = '[App Settings] Show Menu',
  HideMenu = '[App Settings] Hide Menu'
}

export class ShowMenu implements Action {
  readonly type = AppSettingsActionTypes.ShowMenu;
}

export class HideMenu implements Action {
  readonly type = AppSettingsActionTypes.HideMenu;
}

export type AppSettingsActionsUnion = ShowMenu | HideMenu;
