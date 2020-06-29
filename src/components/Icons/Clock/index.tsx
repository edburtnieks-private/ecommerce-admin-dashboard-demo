import React from 'react';
import classNames from 'classnames';

import styles from '../Icons.module.scss';

interface ClockIconProps {
  className?: string;
}

export const ClockIcon = ({ className }: ClockIconProps) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(styles.icon, className)}
    aria-hidden="true"
    data-testid="clockIcon"
  >
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6v6l4 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
