export interface InvoiceReceivable extends TabulariusBase {
  id: string;
  invoiceDate: Date;
  dueDate: Date;
  transactionDate: Date;
  client: string;
  comment: string;
  amount: number;
  currency: string;
  account: string;
}
