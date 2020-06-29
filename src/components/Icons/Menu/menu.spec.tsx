import React from 'react';
import { render } from '@testing-library/react';

import { MenuIcon } from './index';

describe('MenuIcon', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MenuIcon />
    );

    expect(getByTestId('menuIcon')).toBeInTheDocument();
  });
});
