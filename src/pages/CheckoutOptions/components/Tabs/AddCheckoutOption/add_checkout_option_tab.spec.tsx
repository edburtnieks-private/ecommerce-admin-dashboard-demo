import React from 'react';
import { render } from '@testing-library/react';

import { AddCheckoutOptionTab } from './index';

describe('AddCheckoutOptionTab', () => {
  it('should render', () => {
    const { getByText } = render(
      <AddCheckoutOptionTab />,
    );

    expect(getByText('Add Checkout Option Tab')).toBeInTheDocument();
  });
});
