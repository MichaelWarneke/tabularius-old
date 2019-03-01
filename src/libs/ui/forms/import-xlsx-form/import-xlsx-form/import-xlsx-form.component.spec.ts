import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportXlsxFormComponent } from './import-xlsx-form.component';

describe('ImportXlsxFormComponent', () => {
  let component: ImportXlsxFormComponent;
  let fixture: ComponentFixture<ImportXlsxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportXlsxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportXlsxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
