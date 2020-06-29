import React from 'react';
import { render } from '@testing-library/react';

import { DefaultLayout } from './index';

describe('DefaultLayout', () => {
  it('should render without title', () => {
    const { getByTestId } = render(
      <DefaultLayout>
        Checkout Options page
      </DefaultLayout>,
    );

    expect(getByTestId('defaultLayout')).toBeInTheDocument();
    expect(getByTestId('defaultLayout').childNodes).toHaveLength(1);
  });

  it('should render with title', () => {
    const { getByTestId } = render(
      <DefaultLayout title="Checkout Options">
        Checkout Options page
      </DefaultLayout>,
    );

    expect(getByTestId('title')).toBeInTheDocument();
    expect(getByTestId('title')).toHaveTextContent('Checkout Options');
  });
});
