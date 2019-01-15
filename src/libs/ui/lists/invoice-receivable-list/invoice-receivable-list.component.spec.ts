import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReceivableListComponent } from './invoice-receivable-list.component';

describe('InvoiceReceivableListComponent', () => {
  let component: InvoiceReceivableListComponent;
  let fixture: ComponentFixture<InvoiceReceivableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceReceivableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceReceivableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
