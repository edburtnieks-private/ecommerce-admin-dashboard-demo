import React from 'react';
import classNames from 'classnames';

import styles from './TransactionFilters.module.scss';

interface TransactionFiltersProps {
  filters: React.ReactNodeArray;
  className?: string;
}

export const TransactionFilters = ({ filters, className }: TransactionFiltersProps) => (
  <div className={classNames(styles.filters, className)} data-testid="transactionFilters">
    {filters.map((filter, index) => (
      <div key={index} className={styles.filter}>
        {filter}
      </div>
    ))}
  </div>
);
