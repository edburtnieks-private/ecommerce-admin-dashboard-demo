import React from 'react';
import { render } from '@testing-library/react';

import { SortIcon } from './index';

describe('SortIcon', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <SortIcon />
    );

    expect(getByTestId('sortIcon')).toBeInTheDocument();
  });
});
