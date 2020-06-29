import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Tabs } from './index';
import { PlusIcon } from '../Icons/Plus';

describe('Tabs', () => {
  it('should render tabs', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Tabs tabs={[
          {
            text: 'Transactions',
            url: '/transactions',
            active: true,
          },
          {
            text: 'Add Checkout Option',
            url: '/add-checkout-option',
            active: false,
            icon: <PlusIcon />,
          },
          {
            text: 'Disabled Tab',
            url: '/disabled-tab',
            active: false,
            disabled: true,
          },
        ]}
        />
      </MemoryRouter>,
    );

    expect(getByTestId('tabs')).toBeInTheDocument();
    expect(getByTestId('tabs').children).toHaveLength(3);
  });
});
