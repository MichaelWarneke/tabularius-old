import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntryContainerComponent } from './add-entry-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('AddEntryContainerComponent', () => {
  let component: AddEntryContainerComponent;
  let fixture: ComponentFixture<AddEntryContainerComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ AddEntryContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntryContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
