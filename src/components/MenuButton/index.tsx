import React from 'react';

import { MenuIcon } from '../Icons/Menu';
import { CloseIcon } from '../Icons/Close';

import styles from './MenuButton.module.scss';

export interface MenuButtonProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

export const MenuButton = ({ isMenuOpen, onClick, ...rest }: MenuButtonProps) => (
  <button
    onClick={onClick}
    className={styles.menuButton}
    type="button"
    aria-label="Menu"
    data-testid="menuButton"
    {...rest}
  >
    {isMenuOpen ? <CloseIcon data-testid="closeIcon" /> : <MenuIcon data-testid="menuIcon" />}
  </button>
);
