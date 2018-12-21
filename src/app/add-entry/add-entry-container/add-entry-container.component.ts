import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/add-entry.reducer';
import * as fromAction from '../store/add-entry.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tabu-add-entry-container',
  templateUrl: './add-entry-container.component.html',
  styleUrls: ['./add-entry-container.component.css']
})
export class AddEntryContainerComponent implements OnInit {
  state$: Observable<string>;

  constructor(private store: Store<fromStore.State>) {
    this.state$ = store.pipe(
      select(fromStore.selectAddEntryState),
      map(state => (state ? state : 'Nothing'))
    );
  }

  addEntry() {
    this.store.dispatch(new fromAction.AddEntry());
  }

  ngOnInit() {}
}
