export interface InvoiceReceivable extends TabulariusBase2 {
  invoiceDate: Date;
  dueDate: Date;
  transactionDate: Date;
  client: string;
  comment: string;
  amount: number;
  currency: string;
  account: string;
}
