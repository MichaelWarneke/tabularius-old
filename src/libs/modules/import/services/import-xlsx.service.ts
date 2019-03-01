import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Store } from '@ngrx/store';
import { ImportXlsxActions, getAllXlsxImports } from '../store';
import { ImportXlsx } from '../store';

@Injectable({
  providedIn: 'root'
})
export class ImportXlsxService {
  constructor(private store: Store<any>) {}

  importXlsx(evt: any) {
    const target: DataTransfer = evt.target as DataTransfer;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {
        type: 'binary',
        cellDates: true
      });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws) as ImportXlsx[];

      this.store.dispatch(
        new ImportXlsxActions.LoadImportXlsxs({
          importXlsxs: data as ImportXlsx[]
        })
      );
      console.log('Data: ', data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  getAllXlsxImports() {
    return this.store.select(getAllXlsxImports);
  }
}
