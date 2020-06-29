import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Navigation, NavigationLink } from './index';

describe('Navigation', () => {
  it('should render all links', () => {
    const links: NavigationLink[] = [
      { text: 'Link 1', url: '/link-1', icon: () => <svg /> },
      { text: 'Link 2', url: '/link-2', icon: () => <svg /> },
    ];

    const { getByTestId } = render(
      <MemoryRouter>
        <Navigation links={links} />
      </MemoryRouter>,
    );

    expect(getByTestId('navigation')).toBeInTheDocument();
    expect(getByTestId('links').childElementCount).toEqual(2);
  });
});
