import React from 'react';
import { render } from '@testing-library/react';

import { KlarnaLogo } from './index';

describe('KlarnaLogo', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <KlarnaLogo />
    );

    expect(getByTestId('klarnaLogo')).toBeInTheDocument();
  });
});
