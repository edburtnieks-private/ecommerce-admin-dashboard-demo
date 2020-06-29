import React from 'react';
import { render } from '@testing-library/react';

import { EditIcon } from './index';

describe('EditIcon', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <EditIcon />
    );

    expect(getByTestId('editIcon')).toBeInTheDocument();
  });
});
