import React from 'react';

import { Tab } from '../Tab';

import styles from './Tabs.module.scss';

export interface TabsProps {
  tabs: {
    text: string;
    url: string;
    active: boolean;
    icon?: React.ReactNode;
    disabled?: boolean;
  }[];
}

export const Tabs = ({ tabs }: TabsProps) => (
  <div className={styles.tabs} data-testid="tabs">
    {tabs.map((tab) => (
      <Tab key={tab.url} tab={tab} />
    ))}
  </div>
);
