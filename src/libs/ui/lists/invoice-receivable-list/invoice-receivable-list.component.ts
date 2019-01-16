import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { IJournal } from '@tabularius-libs/app-store';

@Component({
  selector: 'tabu-invoice-receivable-list',
  templateUrl: './invoice-receivable-list.component.html',
  styleUrls: ['./invoice-receivable-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceReceivableListComponent implements OnInit {
  @Input() list: IJournal[] = [];

  constructor() {}

  ngOnInit() {}
}
