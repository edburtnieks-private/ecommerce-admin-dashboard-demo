import React, { useState } from 'react';
import classNames from 'classnames';

import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { MenuButton } from '../MenuButton';
import { navigationLinks } from '../../routes';

import styles from './Header.module.scss';

export interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setMenuState] = useState(false);

  const closeMenu = () => {
    setMenuState(false);
  };

  return (
    <header className={className} data-testid="header">
      <div className={styles.headerContent}>
        <Logo onClick={() => closeMenu()} />
        <MenuButton onClick={() => setMenuState(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      </div>

      <Navigation
        className={classNames(styles.navigation, isMenuOpen && styles.active)}
        links={navigationLinks}
        onLinkClick={() => closeMenu()}
      />
    </header>
  );
};
