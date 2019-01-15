import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Journal } from './journal.model';
import { JournalActions, JournalActionTypes } from './journal.actions';

export interface State extends EntityState<Journal> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Journal> = createEntityAdapter<Journal>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: JournalActions
): State {
  switch (action.type) {
    case JournalActionTypes.AddJournal: {
      return adapter.addOne(action.payload.journal, state);
    }

    case JournalActionTypes.UpsertJournal: {
      return adapter.upsertOne(action.payload.journal, state);
    }

    case JournalActionTypes.AddJournals: {
      return adapter.addMany(action.payload.journals, state);
    }

    case JournalActionTypes.UpsertJournals: {
      return adapter.upsertMany(action.payload.journals, state);
    }

    case JournalActionTypes.UpdateJournal: {
      return adapter.updateOne(action.payload.journal, state);
    }

    case JournalActionTypes.UpdateJournals: {
      return adapter.updateMany(action.payload.journals, state);
    }

    case JournalActionTypes.DeleteJournal: {
      return adapter.removeOne(action.payload.id, state);
    }

    case JournalActionTypes.DeleteJournals: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case JournalActionTypes.LoadJournals: {
      return adapter.addAll(action.payload.journals, state);
    }

    case JournalActionTypes.ClearJournals: {
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
