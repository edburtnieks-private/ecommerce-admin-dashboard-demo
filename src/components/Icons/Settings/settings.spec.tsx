import React from 'react';
import { render } from '@testing-library/react';

import { SettingsIcon } from './index';

describe('SettingsIcon', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <SettingsIcon />
    );

    expect(getByTestId('settingsIcon')).toBeInTheDocument();
  });
});
