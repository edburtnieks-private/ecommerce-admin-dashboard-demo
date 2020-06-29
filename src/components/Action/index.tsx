import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import { ChevronIcon } from '../Icons/Chevron';

import styles from './Action.module.scss';

export interface ActionProps {
  text: string;
  icon?: React.ReactNode;
  dropdown?: boolean;
  isDropdownOpen?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  scrollLeft?: number;
}

const DROPDOWN_CONTENT_WIDTH = 200;
const DROPDOWN_CONTENT_MARGIN = 16;

export const Action = ({
  text,
  icon,
  dropdown,
  isDropdownOpen = false,
  onClick,
  children,
  className,
  scrollLeft,
}: ActionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [originalDropdownContentPosition, setOriginalDropdownContentPosition] = useState(0);
  const [dropdownContentPosition, setDropdownContentPosition] = useState(0);

  useEffect(() => {
    if (scrollLeft !== undefined) {
      setDropdownContentPosition(originalDropdownContentPosition - scrollLeft);
    }
  }, [scrollLeft, originalDropdownContentPosition]);

  const handleClick = () => {
    if (dropdown) {
      if (!isDropdownOpen) {
        if (ref.current) {
          const position = ref.current.getBoundingClientRect().right - DROPDOWN_CONTENT_WIDTH - DROPDOWN_CONTENT_MARGIN;
          setDropdownContentPosition(position);
          setOriginalDropdownContentPosition(position);
        }
      }
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={classNames(styles.action, className)}
      ref={ref}
      data-testid="action"
    >
      <button
        type="button"
        className={styles.actionButton}
        onClick={handleClick}
        data-testid="button"
      >
        {icon && (
        <span className={styles.icon} data-testid="icon">
          {icon}
        </span>
        )}

        <span data-testid="text">
          {text}
        </span>

        {dropdown && (
        <span className={styles.chevron} data-testid="chevron">
          <ChevronIcon />
        </span>
        )}
      </button>

      {isDropdownOpen && (
      <div
        className={styles.actionDropdownContent}
        style={{ '--dropdownContentPosition': `${dropdownContentPosition}px` }}
        data-testid="dropdownContent"
      >
        {children}
      </div>
      )}
    </div>
  );
};
