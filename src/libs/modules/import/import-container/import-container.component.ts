import { Component, OnInit } from '@angular/core';
import { ImportXlsxService } from '../services/import-xlsx.service';
import { Observable } from 'rxjs';
import { ImportXlsx } from '../store';

@Component({
  selector: 'tabu-import-container',
  templateUrl: './import-container.component.html',
  styleUrls: ['./import-container.component.scss']
})
export class ImportContainerComponent implements OnInit {
  imports$: Observable<ImportXlsx[]>;

  constructor(private importXlsxService: ImportXlsxService) {
    this.imports$ = this.importXlsxService.getAllXlsxImports();
  }

  ngOnInit() {}

  importXlsx(evt: any) {
    this.importXlsxService.importXlsx(evt);
  }
}
