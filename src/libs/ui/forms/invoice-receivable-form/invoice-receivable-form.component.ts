import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tabu-invoice-receivable-form',
  templateUrl: './invoice-receivable-form.component.html',
  styleUrls: ['./invoice-receivable-form.component.scss']
})
export class InvoiceReceivableFormComponent implements OnInit {
  @Output() addEntry = new EventEmitter();
  invoiceReceivableForm = new FormGroup({
    invoiceDate: new FormControl(''),
    dueDate: new FormControl(''),
    transactionDate: new FormControl(''),
    client: new FormControl(''),
    comment: new FormControl(''),
    amount: new FormControl(''),
    currency: new FormControl(''),
    account: new FormControl('')
  });
  constructor() {}

  ngOnInit() {}
}
