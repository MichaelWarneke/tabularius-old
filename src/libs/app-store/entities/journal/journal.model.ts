export interface IJournal extends TabulariusBase {
  id: number;
  date: Date | null;
  amount: number;
  currency: string;
  account: string;
  dueDate?: Date;
  transactionDate?: Date;
  client?: string;
  comment?: string;
}
