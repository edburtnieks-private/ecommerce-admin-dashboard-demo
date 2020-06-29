import React from 'react';

import { Transaction } from '../Transaction';

export interface TransactionsProps {
  transactions: {
    companyName: string;
    abbreviatedCount: string;
    countPercentage: number;
  }[];
  isLoading: boolean;
  error: string;
}

export const Transactions = ({ transactions, isLoading, error }: TransactionsProps) => {
  if (error) return <div>{error}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div data-testid="transactions">
      {transactions.map((transaction) => (
        <Transaction key={transaction.companyName} transaction={transaction} />
      ))}
    </div>
  );
};
