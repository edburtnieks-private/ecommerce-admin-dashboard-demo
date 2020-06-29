import React from 'react';
import classNames from 'classnames';

import { SettingsIcon } from '../Icons/Settings';
import { PayPalLogo } from '../Logos/PayPal';
import { GooglePlayLogo } from '../Logos/GooglePlay';
import { KlarnaLogo } from '../Logos/Klarna';

import styles from './Transaction.module.scss';

export interface TransactionProps {
  transaction: {
    companyName: string;
    abbreviatedCount: string;
    countPercentage: number;
  };
}

export const Transaction = ({ transaction }: TransactionProps) => {
  let companyLogo: JSX.Element | null = null;

  switch (transaction.companyName) {
    case 'PayPal':
      companyLogo = <PayPalLogo />;
      break;
    case 'Google Play':
      companyLogo = <GooglePlayLogo />;
      break;
    case 'Klarna':
      companyLogo = <KlarnaLogo />;
      break;
    default:
      companyLogo = null;
  }

  return (
    <div className={styles.wrapper} data-testid="transaction">
      <button
        type="button"
        className={classNames(styles.companyName, !companyLogo && styles.noCompanyLogo)}
      >
        <span data-testid="companyName">{transaction.companyName}</span>
        <SettingsIcon />
      </button>

      {companyLogo && (
        <div className={styles.companyLogo}>
          {companyLogo}
        </div>
      )}

      <div className={styles.count} data-testid="abbreviatedCount">
        {transaction.abbreviatedCount}
      </div>

      <div
        className={styles.bar}
        style={{ '--bar-width': `${transaction.countPercentage}%` }}
        data-testid="countPercentage"
      />
    </div>
  );
};
