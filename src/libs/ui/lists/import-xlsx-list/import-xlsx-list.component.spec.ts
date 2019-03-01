import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportXlsxListComponent } from './import-xlsx-list.component';

describe('ImportXlsxListComponent', () => {
  let component: ImportXlsxListComponent;
  let fixture: ComponentFixture<ImportXlsxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportXlsxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportXlsxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
