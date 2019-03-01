import { Component, OnInit, Input } from '@angular/core';
import { ImportXlsx } from '@tabularius-libs/modules/import';

@Component({
  selector: 'tabu-import-xlsx-list',
  templateUrl: './import-xlsx-list.component.html',
  styleUrls: ['./import-xlsx-list.component.scss']
})
export class ImportXlsxListComponent implements OnInit {
  @Input() list: ImportXlsx[] = [];
  displayedColumns: string[] = [
    'id',
    'Date',
    'DebitAmount',
    'CreditAmount',
    'Balance',
    'Narrative'
  ];
  dataSource = this.list;
  constructor() {}

  ngOnInit() {}
}
