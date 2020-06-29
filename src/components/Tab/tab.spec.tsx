import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Tab } from './index';
import { CreditCardIcon } from '../Icons/CreditCard';

describe('Tab', () => {
  it('should render active tab', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Tab
          tab={{
            text: 'Tab 1',
            active: true,
            url: '/tab-1',
          }}
        />
      </MemoryRouter>,
    );

    expect(getByTestId('tab')).toBeInTheDocument();
    expect(getByTestId('tabText')).toHaveTextContent('Tab 1');
    expect(getByTestId('tabLink')).toHaveAttribute('tabIndex', '0');
    expect(getByTestId('tabLink')).toHaveAttribute('href', '/tab-1');
  });

  it('should render not active tab', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Tab
          tab={{
            text: 'Tab 1',
            active: false,
            url: '/tab-1',
          }}
        />
      </MemoryRouter>,
    );

    expect(getByTestId('tab')).toBeInTheDocument();
  });

  it('should render with icon', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Tab
          tab={{
            text: 'Tab 1',
            active: true,
            url: '/tab-1',
            icon: <CreditCardIcon />,
          }}
        />
      </MemoryRouter>,
    );

    expect(getByTestId('creditCardIcon')).toBeInTheDocument();
  });

  it('should render disabled tab', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Tab
          tab={{
            text: 'Tab 1',
            active: true,
            url: '/tab-1',
            disabled: true,
          }}
        />
      </MemoryRouter>,
    );

    expect(getByTestId('tabLink')).toHaveAttribute('tabIndex', '-1');
    expect(getByTestId('tabLink')).toHaveAttribute('aria-disabled', 'true');
  });
});
