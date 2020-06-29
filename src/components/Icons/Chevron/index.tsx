import React from 'react';
import classNames from 'classnames';

import styles from '../Icons.module.scss';

interface ChevronIconProps {
  className?: string;
}

export const ChevronIcon = ({ className }: ChevronIconProps) => (
  <svg
    width="25"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(styles.icon, className)}
    aria-hidden="true"
    data-testid="chevronIcon"
  >
    <path
      d="M6.121 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
