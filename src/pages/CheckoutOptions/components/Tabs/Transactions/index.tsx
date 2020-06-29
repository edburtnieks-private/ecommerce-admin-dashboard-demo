import React from 'react';

import { Transactions } from '../../../../../components/Transactions';
import { TransactionFilters } from '../../../../../components/TransactionFilters';

import styles from './Transactions.module.scss';

export interface TransactionsTabProps {
  transactions: {
    companyName: string;
    abbreviatedCount: string;
    countPercentage: number;
  }[];
  filters: React.ReactNodeArray;
  isLoading: boolean;
  error: string;
}

export const TransactionsTab = ({
  transactions,
  filters,
  isLoading,
  error,
}: TransactionsTabProps) => (
  <>
    <TransactionFilters filters={filters} className={styles.filters} />
    <Transactions transactions={transactions} isLoading={isLoading} error={error} />
  </>
);
