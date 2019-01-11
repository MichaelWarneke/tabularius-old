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
import { AppActions } from '../actions';

export interface State {
  router: RouterReducerState;
  app: fromApp.State;
}

export const reducers: ActionReducerMap<State, any> = {
  router: routerReducer,
  app: fromApp.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
