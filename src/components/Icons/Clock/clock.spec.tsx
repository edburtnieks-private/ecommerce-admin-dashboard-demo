import React from 'react';
import { render } from '@testing-library/react';

import { ClockIcon } from './index';

describe('ClockIcon', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <ClockIcon />
    );

    expect(getByTestId('clockIcon')).toBeInTheDocument();
  });
});
