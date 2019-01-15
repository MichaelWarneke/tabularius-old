import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AddEntryEffects } from './add-entry.effects';

describe('AddEntryEffects', () => {
  let actions$: Observable<any>;
  let effects: AddEntryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddEntryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AddEntryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
