import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';

import { Action } from '../Action';

import styles from './Actions.module.scss';

export interface ActionsProps {
  actions: {
    text: string;
    icon?: React.ReactNode;
    dropdown?: boolean;
    isDropdownOpen?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
  }[];
  scrollLeft?: number;
  className?: string;
}

export const Actions = ({ actions, className }: ActionsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const element = ref.current?.parentElement;

    const scroll = () => {
      let timer: any = null;

      if (timer !== null) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        if (element) {
          setScrollLeft(element.scrollLeft);
        }
      });
    };

    if (element) {
      element.addEventListener('scroll', scroll);
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', scroll);
      }
    };
  }, [ref]);

  return (
    <div
      className={classNames(styles.actions, className)}
      ref={ref}
      data-testid="actions"
    >
      {actions.map((action) => (
        <Action key={action.text} scrollLeft={scrollLeft} {...action} />
      ))}
    </div>
  );
};
