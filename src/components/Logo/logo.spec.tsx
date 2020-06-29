import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Logo } from './index';

describe('Logo', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    expect(getByTestId('logo')).toBeInTheDocument();
  });
});
