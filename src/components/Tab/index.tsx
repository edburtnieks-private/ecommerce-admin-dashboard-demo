import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Tab.module.scss';

export interface TabModel {
  text: string;
  url: string;
  active: boolean;
  content: React.ReactNode;
  icon?: React.ReactNode;
  actions?: {
    text: string;
    icon?: React.ReactNode;
    dropdown?: boolean;
    isDropdownOpen?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
  }[];
  disabled?: boolean;
}

export interface TabProps {
  tab: {
    text: string;
    url: string;
    active: boolean;
    icon?: React.ReactNode;
    disabled?: boolean;
  };
}

export const Tab = ({ tab }: TabProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (tab.disabled) {
      event.preventDefault();
    }
  };

  return (
    <div
      className={classNames(styles.wrapper, tab.disabled && styles.disabled)}
      data-testid="tab"
    >
      <Link
        key={tab.url}
        to={tab.url}
        className={classNames(styles.tab, tab.active && styles.active, tab.disabled && styles.disabled)}
        aria-disabled={tab.disabled}
        onClick={handleClick}
        tabIndex={tab.disabled ? -1 : 0}
        data-testid="tabLink"
      >
        {tab.icon}
        <span data-testid="tabText">{tab.text}</span>
      </Link>
    </div>
  );
};
