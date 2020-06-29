import React from 'react';
import { render } from '@testing-library/react';

import { PlusIcon } from './index';

describe('PlusIcon', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <PlusIcon />
    );

    expect(getByTestId('plusIcon')).toBeInTheDocument();
  });
});
