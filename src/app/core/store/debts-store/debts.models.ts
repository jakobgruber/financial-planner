export interface Debt {
  id: string;
  personId: string;
  title: string;
  amount: number;
  description: string;
  isPaid: boolean;
  isMine: boolean;
}

export interface Person {
  id: string;
  name: string;
  description: string;
}
