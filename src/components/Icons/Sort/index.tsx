import React from 'react';
import classNames from 'classnames';

import styles from '../Icons.module.scss';

interface SortIconProps {
  className?: string;
}

export const SortIcon = ({ className }: SortIconProps) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(styles.icon, className)}
    aria-hidden="true"
    data-testid="sortIcon"
  >
    <path
      d="M7 19V4M2 9l5-5 5 5M17 5v15M22 15l-5 5-5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
