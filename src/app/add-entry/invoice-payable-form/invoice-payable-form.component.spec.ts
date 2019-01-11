import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePayableFormComponent } from './invoice-payable-form.component';

describe('InvoicePayableFormComponent', () => {
  let component: InvoicePayableFormComponent;
  let fixture: ComponentFixture<InvoicePayableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePayableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePayableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
