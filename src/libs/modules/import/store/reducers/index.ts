import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromImportXlsx from '../entities/import-xlsx/import-xlsx.reducer';

export interface State {
  importXlsx: fromImportXlsx.State;
}

export const reducers: ActionReducerMap<State, any> = {
  importXlsx: fromImportXlsx.reducer
};

export const selectFeature = createFeatureSelector<State>('import');

export const selectImportXlsxState = createSelector(
  selectFeature,
  (state: State) => state.importXlsx
);

export const getAllXlsxImports = createSelector(
  selectImportXlsxState,
  fromImportXlsx.selectAll
);
