import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ImportXlsx } from './import-xlsx.model';
import { ImportXlsxActions, ImportXlsxActionTypes } from './import-xlsx.actions';

export interface State extends EntityState<ImportXlsx> {
  // additional entities state properties
}

export const adapter: EntityAdapter<ImportXlsx> = createEntityAdapter<ImportXlsx>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: ImportXlsxActions
): State {
  switch (action.type) {
    case ImportXlsxActionTypes.AddImportXlsx: {
      return adapter.addOne(action.payload.importXlsx, state);
    }

    case ImportXlsxActionTypes.UpsertImportXlsx: {
      return adapter.upsertOne(action.payload.importXlsx, state);
    }

    case ImportXlsxActionTypes.AddImportXlsxs: {
      return adapter.addMany(action.payload.importXlsxs, state);
    }

    case ImportXlsxActionTypes.UpsertImportXlsxs: {
      return adapter.upsertMany(action.payload.importXlsxs, state);
    }

    case ImportXlsxActionTypes.UpdateImportXlsx: {
      return adapter.updateOne(action.payload.importXlsx, state);
    }

    case ImportXlsxActionTypes.UpdateImportXlsxs: {
      return adapter.updateMany(action.payload.importXlsxs, state);
    }

    case ImportXlsxActionTypes.DeleteImportXlsx: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ImportXlsxActionTypes.DeleteImportXlsxs: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ImportXlsxActionTypes.LoadImportXlsxs: {
      return adapter.addAll(action.payload.importXlsxs, state);
    }

    case ImportXlsxActionTypes.ClearImportXlsxs: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
