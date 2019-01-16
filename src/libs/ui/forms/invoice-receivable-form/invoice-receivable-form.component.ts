import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Input,
  OnChanges
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { IJournal } from '@tabularius-libs/app-store';

export class InvoiceReceivableModel {
  id = [-1, Validators.required];
  date = [new Date(Date.now()), Validators.required];
  amount = [0, Validators.required];
  currency = ['', Validators.required];
  account = ['', Validators.required];
  dueDate = [undefined];
  transactionDate = [undefined];
  client = [''];
  comment = [''];
}

@Component({
  selector: 'tabu-invoice-receivable-form',
  templateUrl: './invoice-receivable-form.component.html',
  styleUrls: ['./invoice-receivable-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceReceivableFormComponent implements OnInit, OnChanges {
  @Output() addEntry = new EventEmitter<IJournal>();
  @Input() defaultCurrency = '';
  invoiceReceivableForm = this.fb.group(new InvoiceReceivableModel());
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.defaultCurrency !== '') {
      const x = this.invoiceReceivableForm.get('currency');
      if (x && !x.touched) {
        x.setValue(this.defaultCurrency);
      }
    }
  }
  submit() {
    const journal: IJournal = this.convertToJournal(
      this.invoiceReceivableForm.value
    );
    this.addEntry.emit(journal);
  }

  private convertToJournal(invoice: any): IJournal {
    return { ...invoice };
  }
}
