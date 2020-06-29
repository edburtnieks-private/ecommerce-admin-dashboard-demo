import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './Navigation.module.scss';

export type NavigationLink = {
  text: string;
  url: string;
  icon?: (...props: any) => JSX.Element;
};

export interface NavigationProps {
  links: NavigationLink[];
  className?: string;
  onLinkClick?: () => void;
}

export const Navigation = ({ links, className, onLinkClick }: NavigationProps) => (
  <nav className={className} aria-label="Main menu" data-testid="navigation">
    <ul className={styles.links} data-testid="links">
      {links.map((link: NavigationLink) => (
        <li key={link.url} className={styles.linksListItem}>
          <Link
            className={styles.link}
            key={link.url}
            to={link.url}
            onClick={onLinkClick}
          >
            {link.icon && link.icon('')}
            <span>{link.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default CSSModules(Navigation, styles);
