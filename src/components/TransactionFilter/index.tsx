import React from 'react';

import styles from './TransactionFilter.module.scss';

interface TransactionFilterProps {
  text: string;
  icon?: JSX.Element;
}

export const TransactionFilter = ({ icon, text }: TransactionFilterProps) => (
  <h2 className={styles.filter} data-testid="transactionFilter">
    {icon && (
      <span className={styles.icon}>
        {icon}
      </span>
    )}

    <span className={styles.text} data-testid="text">{text}</span>
  </h2>
);
