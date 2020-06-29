import React from 'react';
import classNames from 'classnames';

import styles from '../Icons.module.scss';

interface CloseIconProps {
  className?: string;
}

export const CloseIcon = ({ className }: CloseIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(styles.icon, className)}
    aria-hidden="true"
    data-testid="closeIcon"
  >
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
