import React from 'react';
import { render } from '@testing-library/react';

import { TransactionFilters } from './index';
import { TransactionFilter } from '../TransactionFilter';
import { ClockIcon } from '../Icons/Clock';

describe('TransactionFilters', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <TransactionFilters filters={[
        <TransactionFilter text="All Transactions" />,
        <TransactionFilter text="This Week" icon={<ClockIcon />} />,
      ]}
      />,
    );

    expect(getByTestId('transactionFilters')).toBeInTheDocument();
    expect(getByTestId('transactionFilters').children).toHaveLength(2);
  });
});
