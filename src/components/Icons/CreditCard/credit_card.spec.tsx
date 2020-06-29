import React from 'react';
import { render } from '@testing-library/react';

import { CreditCardIcon } from './index';

describe('CreditCardIcon', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <CreditCardIcon />
    );

    expect(getByTestId('creditCardIcon')).toBeInTheDocument();
  });
});
