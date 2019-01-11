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
import * as fromEntry from './entry-state';

export interface State {
  router: RouterReducerState;
  app: fromApp.State;
  entry: fromEntry.State;
}

export const reducers: ActionReducerMap<State, any> = {
  router: routerReducer,
  app: fromApp.reducer,
  entry: fromEntry.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getEntryState = createFeatureSelector<State, fromEntry.State>(
  'entry'
);

export const getInvoiceReceivablesState = createSelector(
  getEntryState,
  fromEntry.getInvoiceReceivables
);
