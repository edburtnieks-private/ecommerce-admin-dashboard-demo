import React from 'react';
import { render } from '@testing-library/react';

import { ManageCheckoutOptionsTab } from './index';

describe('ManageCheckoutOptionsTab', () => {
  it('should render', () => {
    const { getByText } = render(
      <ManageCheckoutOptionsTab />,
    );

    expect(getByText('Manage Checkout Options Tab')).toBeInTheDocument();
  });
});
