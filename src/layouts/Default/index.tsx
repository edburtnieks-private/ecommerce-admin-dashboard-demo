import React from 'react';

import styles from './DefaultLayout.module.scss';

export interface DefaultLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => (
  <main className={styles.main} data-testid="defaultLayout">
    {title && (
      <header className={styles.header}>
        <h1 className={styles.title} data-testid="title">{title}</h1>
      </header>
    )}

    {children}
  </main>
);
