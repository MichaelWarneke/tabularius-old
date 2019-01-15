import { Component, OnInit, Input } from '@angular/core';
import { Journal } from '@tabularius-libs/app-store';

@Component({
  selector: 'tabu-invoice-receivable-list',
  templateUrl: './invoice-receivable-list.component.html',
  styleUrls: ['./invoice-receivable-list.component.scss']
})
export class InvoiceReceivableListComponent implements OnInit {
  @Input() list: Journal[] = [];

  constructor() {}

  ngOnInit() {}
}
