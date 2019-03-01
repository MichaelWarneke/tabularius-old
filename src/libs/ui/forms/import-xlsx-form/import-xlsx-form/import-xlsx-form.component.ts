import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tabu-import-xlsx-form',
  templateUrl: './import-xlsx-form.component.html',
  styleUrls: ['./import-xlsx-form.component.scss']
})
export class ImportXlsxFormComponent implements OnInit {
  @Output() importXlsx = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
}
