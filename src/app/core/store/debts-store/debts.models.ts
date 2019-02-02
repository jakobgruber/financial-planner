export interface Debt {
  id: number;
  title: string;
  amount: number;
  description: string;
  isPaid: boolean;
}

export interface Person {
  id: number;
  name: string;
  description: string;
  debts: Debt[];
}
