import React from 'react';
import { render } from '@testing-library/react';

import { PayPalLogo } from './index';

describe('PayPalLogo', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <PayPalLogo />
    );

    expect(getByTestId('payPalLogo')).toBeInTheDocument();
  });
});
