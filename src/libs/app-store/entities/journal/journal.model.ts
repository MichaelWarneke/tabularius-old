export interface Journal extends TabulariusBase {
  date: Date;
  dueDate: Date;
  transactionDate: Date;
  client: string;
  comment: string;
  amount: number;
  currency: string;
  account: string;
}
