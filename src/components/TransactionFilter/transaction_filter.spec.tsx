import React from 'react';
import { render } from '@testing-library/react';

import { TransactionFilter } from './index';
import { CreditCardIcon } from '../Icons/CreditCard';

describe('TransactionFilter', () => {
  it('should render with text', () => {
    const { getByTestId } = render(
      <TransactionFilter text="All Transactions" />,
    );

    expect(getByTestId('transactionFilter')).toBeInTheDocument();
    expect(getByTestId('text')).toHaveTextContent('All Transactions');
  });

  it('should render with icon', () => {
    const { getByTestId } = render(
      <TransactionFilter
        text="All Transactions"
        icon={<CreditCardIcon />}
      />,
    );

    expect(getByTestId('creditCardIcon')).toBeInTheDocument();
  });
});
