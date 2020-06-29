import React from 'react';
import { render } from '@testing-library/react';

import { CloseIcon } from './index';

describe('CloseIcon', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <CloseIcon />
    );

    expect(getByTestId('closeIcon')).toBeInTheDocument();
  });
});
