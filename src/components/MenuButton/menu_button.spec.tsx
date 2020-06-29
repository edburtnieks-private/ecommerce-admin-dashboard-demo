import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { MenuButton } from './index';

describe('MenuButton', () => {
  it('should render with menu closed', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <MenuButton isMenuOpen={false} onClick={onClick} />,
    );

    fireEvent.click(getByTestId('menuButton'));

    expect(getByTestId('menuButton')).toBeInTheDocument();
    expect(getByTestId('menuIcon')).toBeInTheDocument();
    expect(onClick).toBeCalledTimes(1);
  });

  it('should render with menu opened', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <MenuButton isMenuOpen onClick={onClick} />,
    );

    fireEvent.click(getByTestId('menuButton'));

    expect(getByTestId('menuButton')).toBeInTheDocument();
    expect(getByTestId('closeIcon')).toBeInTheDocument();
    expect(onClick).toBeCalledTimes(1);
  });
});
