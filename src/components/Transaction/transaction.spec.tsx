import React from 'react';
import { render } from '@testing-library/react';

import { Transaction } from './index';

describe('Transaction', () => {
  it('should render with company logo', () => {
    const { getByTestId } = render(
      <Transaction transaction={
          {
            companyName: 'PayPal',
            abbreviatedCount: '2.8M',
            countPercentage: 76,
          }
        }
      />,
    );

    expect(getByTestId('transaction')).toBeInTheDocument();
    expect(getByTestId('payPalLogo')).toBeInTheDocument();
    expect(getByTestId('companyName')).toHaveTextContent('PayPal');
    expect(getByTestId('abbreviatedCount')).toHaveTextContent('2.8M');
  });

  it('should render without company logo', () => {
    const { getByTestId } = render(
      <Transaction transaction={
          {
            companyName: 'Non Existing Name',
            abbreviatedCount: '2.8M',
            countPercentage: 76,
          }
        }
      />,
    );

    expect(getByTestId('transaction')).toBeInTheDocument();
    expect(getByTestId('companyName')).toHaveTextContent('Non Existing Name');
    expect(getByTestId('abbreviatedCount')).toHaveTextContent('2.8M');
  });
});
