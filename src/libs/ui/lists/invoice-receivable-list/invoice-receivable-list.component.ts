import { Component, OnInit, Input } from '@angular/core';
import { InvoiceReceivable } from '@tabularius-libs/shared';

@Component({
  selector: 'tabu-invoice-receivable-list',
  templateUrl: './invoice-receivable-list.component.html',
  styleUrls: ['./invoice-receivable-list.component.scss']
})
export class InvoiceReceivableListComponent implements OnInit {
  @Input() list: InvoiceReceivable[] = [];

  constructor() {}

  ngOnInit() {}
}
