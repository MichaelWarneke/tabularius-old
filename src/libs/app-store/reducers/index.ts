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
import * as fromJournal from '../entities/journal/journal.reducer';

export interface State {
  router: RouterReducerState;
  app: fromApp.State;
  journal: fromJournal.State;
}

export const reducers: ActionReducerMap<State, any> = {
  router: routerReducer,
  app: fromApp.reducer,
  journal: fromJournal.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getJournalState = createFeatureSelector<State, fromJournal.State>(
  'journal'
);

export const getAllJournals = createSelector(
  getJournalState,
  fromJournal.selectAll
);
