import React from 'react';
import { render } from '@testing-library/react';

import { GooglePlayLogo } from './index';

describe('GooglePlayLogo', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <GooglePlayLogo />
    );

    expect(getByTestId('googlePlayLogo')).toBeInTheDocument();
  });
});
