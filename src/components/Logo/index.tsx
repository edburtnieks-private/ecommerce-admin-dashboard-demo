import React from 'react';
import { Link } from 'react-router-dom';

import { OVERVIEW } from '../../routes';

import styles from './Logo.module.scss';

export interface LogoProps {
  onClick?: () => void;
}

export const Logo = ({ onClick }: LogoProps) => (
  <Link
    to={OVERVIEW}
    onClick={onClick}
    className={styles.logo}
    aria-label="Logo"
    data-testid="logo"
  >
    Logo
  </Link>
);
