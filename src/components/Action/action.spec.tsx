import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Action } from './index';
import { SettingsIcon } from '../Icons/Settings';

describe('Action', () => {
  it('should render with text', () => {
    const { getByTestId } = render(
      <Action text="Settings" />,
    );

    expect(getByTestId('action')).toBeInTheDocument();
    expect(getByTestId('text')).toHaveTextContent('Settings');
  });

  it('should render with icon', () => {
    const { getByTestId } = render(
      <Action text="Settings" icon={<SettingsIcon />} />,
    );

    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('should render as dropdown (closed)', async () => {
    const { getByTestId } = render(
      <Action
        text="Settings"
        dropdown
      >
        <Action text="Theme" />
        <Action text="Profile" />
        <Action text="Layout" />
      </Action>,
    );

    expect(getByTestId('chevron')).toBeInTheDocument();
  });

  it('should render as dropdown (open)', async () => {
    const { getByTestId } = render(
      <Action
        text="Settings"
        dropdown
        isDropdownOpen
      >
        <Action text="Theme" />
        <Action text="Profile" />
        <Action text="Layout" />
      </Action>,
    );

    expect(getByTestId('chevron')).toBeInTheDocument();
    expect(getByTestId('dropdownContent')).toBeInTheDocument();
    expect(getByTestId('dropdownContent').children).toHaveLength(3);
  });

  it('should call onClick', async () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <Action
        text="Settings"
        dropdown
        onClick={onClick}
      >
        <Action text="Theme" />
        <Action text="Profile" />
        <Action text="Layout" />
      </Action>,
    );

    fireEvent.click(getByText('Settings').parentElement as HTMLElement);
    expect(onClick).toBeCalledTimes(1);
  });
});
