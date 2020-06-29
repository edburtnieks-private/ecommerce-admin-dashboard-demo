import React from 'react';
import classNames from 'classnames';

import styles from '../Icons.module.scss';

interface EditIconProps {
  className?: string;
}

export const EditIcon = ({ className }: EditIconProps) => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(styles.icon, className)}
    aria-hidden="true"
    data-testid="editIcon"
  >
    <path
      d="M10 3.12134H3C2.46957 3.12134 1.96086 3.33205 1.58579 3.70712C1.21071 4.0822 1 4.5909 1 5.12134V19.1213C1 19.6518 1.21071 20.1605 1.58579 20.5356C1.96086 20.9106 2.46957 21.1213 3 21.1213H17C17.5304 21.1213 18.0391 20.9106 18.4142 20.5356C18.7893 20.1605 19 19.6518 19 19.1213V12.1213"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 1.62132C17.8978 1.2235 18.4374 1 19 1C19.5626 1 20.1022 1.2235 20.5 1.62132C20.8978 2.01915 21.1213 2.55871 21.1213 3.12132C21.1213 3.68393 20.8978 4.2235 20.5 4.62132L11 14.1213L7 15.1213L8 11.1213L17.5 1.62132Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
