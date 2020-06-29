import React from 'react';
import classNames from 'classnames';

import styles from '../Icons.module.scss';

interface PlusIconProps {
  className?: string;
}

export const PlusIcon = ({ className }: PlusIconProps) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(styles.icon, className)}
    aria-hidden="true"
    data-testid="plusIcon"
  >
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
