import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Header } from './index';

describe('Header', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(getByTestId('header')).toBeInTheDocument();
  });
});
