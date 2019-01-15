import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReceivableFormComponent } from './invoice-receivable-form.component';

describe('InvoiceReceivableFormComponent', () => {
  let component: InvoiceReceivableFormComponent;
  let fixture: ComponentFixture<InvoiceReceivableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceReceivableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceReceivableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
