import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Tabs } from '../Tabs';
import { TabModel } from '../Tab';
import { Action } from '../Action';
import { Actions } from '../Actions';

import styles from './Card.module.scss';

export interface CardProps {
  title: string;
  titleLink: string;
  tabs?: TabModel[];
  actions?: {
    text: string;
    icon?: React.ReactNode;
    dropdown?: boolean;
    isDropdownOpen?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
  }[];
  children?: React.ReactNode;
}

export const Card = ({
  title,
  titleLink,
  tabs,
  actions,
  children,
}: CardProps) => {
  const [isActionsOverlayVisible, setActionsOverlayVisibility] = useState(false);

  const toggleActionsOverlay = () => {
    setActionsOverlayVisibility(!isActionsOverlayVisible);
  };

  if (!tabs) {
    return (
      <div data-testid="card">
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <Link to={titleLink} className={styles.titleLink} data-testid="titleLink">
              <h2 className={styles.title} data-testid="title">
                {title}
              </h2>
            </Link>

            {actions && (
              <>
                <div className={styles.actionsWrapper}>
                  <Action
                    text="Actions"
                    dropdown
                    className={styles.actionsButton}
                    onClick={() => toggleActionsOverlay()}
                  />

                  <Actions
                    actions={actions}
                    className={classNames(styles.actions, isActionsOverlayVisible && styles.active)}
                  />
                </div>
              </>
            )}
          </div>
        </header>

        {children}
      </div>
    );
  }

  return (
    <div data-testid="card">
      {tabs.map((tab: TabModel) => {
        if (!tab.active) return null;

        return (
          <div key={tab.url} data-testid="tab">
            <header className={classNames(styles.header, styles.withTabs)}>
              <div className={classNames(styles.headerTop, styles.withTabs)}>
                <Link to={titleLink} className={styles.titleLink} data-testid="titleLink">
                  <h2 className={styles.title} data-testid="title">
                    {title}
                  </h2>
                </Link>

                {tab.actions && (
                  <>
                    <div className={styles.actionsWrapper}>
                      <Action
                        text="Actions"
                        dropdown
                        className={styles.actionsButton}
                        onClick={() => toggleActionsOverlay()}
                      />

                      <Actions
                        actions={tab.actions}
                        className={classNames(styles.actions, isActionsOverlayVisible && styles.active)}
                      />
                    </div>
                  </>
                )}
              </div>

              <Tabs tabs={tabs} />
            </header>

            {tab.content}
          </div>
        );
      })}
    </div>
  );
};
