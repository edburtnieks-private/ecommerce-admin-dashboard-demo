import React from 'react';
import { render } from '@testing-library/react';

import { Actions } from './index';

describe('Actions', () => {
  it('should render with children', () => {
    const { getByTestId } = render(
      <Actions
        actions={[
          {
            text: 'Sort',
          },
          {
            text: 'Settings',
          },
          {
            text: 'Add',
          },
        ]}
      />,
    );

    expect(getByTestId('actions')).toBeInTheDocument();
    expect(getByTestId('actions').children).toHaveLength(3);
  });
});
