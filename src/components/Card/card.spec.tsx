import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Card } from './index';

describe('Card', () => {
  it('should render with title and content', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Card
          title="Checkout Options"
          titleLink="/checkout-options"
        >
          Content
        </Card>
      </MemoryRouter>,
    );

    expect(getByTestId('card')).toBeInTheDocument();
    expect(getByTestId('card')).toHaveTextContent('Content');
    expect(getByTestId('title')).toHaveTextContent('Checkout Options');
    expect(getByTestId('titleLink')).toHaveAttribute('href', '/checkout-options');
  });

  it('should render with actions', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Card
          title="Checkout Options"
          titleLink="/checkout-options"
          actions={[
            {
              text: 'Sort',
            },
            {
              text: 'Settings',
            },
            {
              text: 'Add',
            },
          ]}
        >
          Content
        </Card>
      </MemoryRouter>,
    );

    expect(getByTestId('actions')).toBeInTheDocument();
    expect(getByTestId('actions').children).toHaveLength(3);
  });

  it('should render with tabs and tab content', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <Card
          title="Checkout Options"
          titleLink="/checkout-options"
          tabs={[
            {
              text: 'Transactions',
              url: '/transactions',
              active: true,
              content: 'Transaction Tab Content',
            },
            {
              text: 'Add Checkout Option',
              url: '/add-checkout-option',
              active: false,
              content: 'Add Checkout Option Tab Content',
            },
          ]}
        />
      </MemoryRouter>,
    );

    expect(getByTestId('tabs')).toBeInTheDocument();
    expect(getByTestId('tabs').children).toHaveLength(2);
    expect(getByText('Transaction Tab Content')).toBeInTheDocument();
  });
});
