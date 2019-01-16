import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import * as fromApp from './app-state';
import * as fromAppSettings from './app-settings-state';
import * as fromJournal from '../entities/journal/journal.reducer';

export interface State {
  router: RouterReducerState;
  app: fromApp.State;
  app_settings: fromAppSettings.State;
  journal: fromJournal.State;
}

export const reducers: ActionReducerMap<State, any> = {
  router: routerReducer,
  app: fromApp.reducer,
  app_settings: fromAppSettings.reducer,
  journal: fromJournal.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const selectAppState = createFeatureSelector<fromApp.State>('app');

export const getShowMenu = createSelector(
  selectAppState,
  fromApp.selectShowMenu
);

export const selectAppSettingsState = createFeatureSelector<
  fromAppSettings.State
>('app_settings');

export const getSettingsCurrency = createSelector(
  selectAppSettingsState,
  fromAppSettings.selectCurrency
);

export const selectJournalState = createFeatureSelector<fromJournal.State>(
  'journal'
);

export const getAllJournals = createSelector(
  selectJournalState,
  fromJournal.selectAll
);
