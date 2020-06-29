import React from 'react';
import { render } from '@testing-library/react';

import { ChevronIcon } from './index';

describe('ChevronIcon', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <ChevronIcon />
    );

    expect(getByTestId('chevronIcon')).toBeInTheDocument();
  });
});
