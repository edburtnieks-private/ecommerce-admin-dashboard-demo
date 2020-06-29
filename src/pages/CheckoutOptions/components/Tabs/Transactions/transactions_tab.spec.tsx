import React from 'react';
import { render } from '@testing-library/react';

import { TransactionsTab } from './index';
import { TransactionFilter } from '../../../../../components/TransactionFilter';

describe('TransactionsTab', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <TransactionsTab
        transactions={[
          {
            companyName: 'PayPal',
            abbreviatedCount: '2.8M',
            countPercentage: 100,
          },
          {
            companyName: 'Google Play',
            abbreviatedCount: '476K',
            countPercentage: 17,
          },
          {
            companyName: 'Klarna',
            abbreviatedCount: '76',
            countPercentage: 0,
          },
        ]}
        filters={[
          <TransactionFilter text="All Transactions" />,
        ]}
      />,
    );

    expect(getByTestId('transactions')).toBeInTheDocument();
    expect(getByTestId('transactionFilters')).toBeInTheDocument();
  });
});
