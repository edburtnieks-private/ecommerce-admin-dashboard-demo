import React, { useEffect, useState } from 'react';

import { useStoreActions, useStoreState } from '../../../../hooks/store';

import { Card } from '../../../../components/Card';
import { TabModel } from '../../../../components/Tab';
import { Action } from '../../../../components/Action';
import { TransactionFilter } from '../../../../components/TransactionFilter';
import { CreditCardIcon } from '../../../../components/Icons/CreditCard';
import { SettingsIcon } from '../../../../components/Icons/Settings';
import { PlusIcon } from '../../../../components/Icons/Plus';
import { ClockIcon } from '../../../../components/Icons/Clock';
import { SortIcon } from '../../../../components/Icons/Sort';

import { TransactionsTab } from '../Tabs/Transactions';
import { ManageCheckoutOptionsTab } from '../Tabs/ManageCheckoutOptions';
import { AddCheckoutOptionTab } from '../Tabs/AddCheckoutOption';

import { PaymentTypeModel } from '../../../../store/models/paymentTypes';

import {
  CHECKOUT_OPTIONS,
  CHECKOUT_OPTIONS_TRANSACTIONS_TAB,
  CHECKOUT_OPTIONS_MANAGE_CHECKOUT_OPTIONS_TAB,
  CHECKOUT_OPTIONS_ADD_CHECKOUT_OPTION_TAB,
  OVERVIEW_TRANSACTIONS_TAB,
  OVERVIEW_MANAGE_CHECKOUT_OPTIONS_TAB,
  OVERVIEW_ADD_CHECKOUT_OPTION_TAB,
} from '../../../../routes';

export const tabNames = {
  transactions: 'transactions',
  manageCheckoutOptions: 'manage-checkout-options',
  addCheckoutOption: 'add-checkout-option',
};

export interface CheckoutOptionsCardProps {
  activeTab: string;
  location?: 'overview' | 'checkout-options';
}

export const CheckoutOptionsCard = ({ activeTab, location = 'checkout-options' }: CheckoutOptionsCardProps) => {
  // Store state
  const filteredTransactions = useStoreState((state) => state.transactions.filteredItems);
  const transactionTimePeriod = useStoreState((state) => state.transactions.timePeriod);
  const transactionSortingOrder = useStoreState((state) => state.transactions.sortingOrder);
  const paymentTypes = useStoreState((state) => state.paymentTypes.items);
  const currentPaymentType = useStoreState((state) => state.paymentTypes.current);

  // Store actions
  const fetchTransactions = useStoreActions((actions) => actions.transactions.fetchTransactions);
  const sortTransactions = useStoreActions((actions) => actions.transactions.sortItems);
  const filterTransactionsByTimePeriod = useStoreActions((actions) => actions.transactions.filterByTimePeriod);
  const filterTransactionsByPaymentType = useStoreActions((actions) => actions.transactions.filterByPaymentType);
  const resetTransactionsFilterPaymentType = useStoreActions((actions) => actions.transactions.resetFilterPaymentType);
  const fetchPaymentTypes = useStoreActions((actions) => actions.paymentTypes.fetchPaymentTypes);

  // Local state
  const [isPaymentTypeDropdownOpen, setPaymentTypeDropdown] = useState(false);
  const [isTimeDropdownOpen, setTimeDropdown] = useState(false);
  const [isTransactionsLoading, setTransactionsLoading] = useState(true);
  const [transactionsError, setTransactionsError] = useState('');

  const toggleTimeDropdown = () => {
    setTimeDropdown(!isTimeDropdownOpen);
  };

  const togglePaymentTypeDropdown = () => {
    setPaymentTypeDropdown(!isPaymentTypeDropdownOpen);
  };

  const applyTimePeriod = (newTimePeriod: string = 'All Time') => {
    filterTransactionsByTimePeriod(newTimePeriod);
    setTimeDropdown(false);
  };

  const applyPaymentType = (paymentType: PaymentTypeModel) => {
    filterTransactionsByPaymentType(paymentType);
    setPaymentTypeDropdown(false);
  };

  const resetPaymentType = () => {
    resetTransactionsFilterPaymentType();
    setPaymentTypeDropdown(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchTransactions();
        setTransactionsLoading(false);
      } catch (error) {
        setTransactionsError(error.message);
      }

      try {
        await fetchPaymentTypes();
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const tabs: TabModel[] = [
    {
      text: 'Transactions',
      url: location === 'checkout-options'
        ? CHECKOUT_OPTIONS_TRANSACTIONS_TAB
        : OVERVIEW_TRANSACTIONS_TAB,
      active: activeTab === tabNames.transactions,
      content: <TransactionsTab
        key={tabNames.transactions}
        transactions={filteredTransactions}
        filters={[
          <TransactionFilter icon={<ClockIcon />} text={transactionTimePeriod} />,
          <TransactionFilter icon={<CreditCardIcon />} text={currentPaymentType} />,
          <TransactionFilter icon={<SortIcon />} text={transactionSortingOrder} />,
        ]}
        isLoading={isTransactionsLoading}
        error={transactionsError}
      />,
      icon: <CreditCardIcon />,
      actions: [
        {
          text: transactionTimePeriod,
          icon: <ClockIcon />,
          dropdown: true,
          isDropdownOpen: isTimeDropdownOpen,
          onClick: () => toggleTimeDropdown(),
          children: [
            <Action key="allTime" text="All Time" onClick={() => applyTimePeriod()} />,
            <Action key="thisYear" text="This Year" onClick={() => applyTimePeriod('This Year')} />,
            <Action key="thisMonth" text="This Month" onClick={() => applyTimePeriod('This Month')} />,
            <Action key="thisWeek" text="This Week" onClick={() => applyTimePeriod('This Week')} />,
            <Action key="today" text="Today" onClick={() => applyTimePeriod('Today')} />,
          ],
        },
        {
          text: currentPaymentType,
          icon: <CreditCardIcon />,
          dropdown: true,
          isDropdownOpen: isPaymentTypeDropdownOpen,
          onClick: () => togglePaymentTypeDropdown(),
          children: [
            <Action key="all" text="All" onClick={() => resetPaymentType()} />,
            paymentTypes.map((paymentType) => (
              <Action
                key={paymentType.id}
                text={paymentType.name}
                onClick={() => applyPaymentType(paymentType)}
              />
            )),
          ],
        },
        {
          text: transactionSortingOrder,
          icon: <SortIcon />,
          onClick: () => sortTransactions(),
        },
      ],
    },
    {
      text: 'Manage Checkout Options',
      url: location === 'checkout-options'
        ? CHECKOUT_OPTIONS_MANAGE_CHECKOUT_OPTIONS_TAB
        : OVERVIEW_MANAGE_CHECKOUT_OPTIONS_TAB,
      active: activeTab === tabNames.manageCheckoutOptions,
      content: <ManageCheckoutOptionsTab key={tabNames.manageCheckoutOptions} />,
      icon: <SettingsIcon />,
      actions: [
        {
          text: 'All',
          icon: <CreditCardIcon />,
          dropdown: true,
        },
        {
          text: 'Sort',
          icon: <SortIcon />,
        },
      ],
      disabled: true,
    },
    {
      text: 'Add Checkout Option',
      url: location === 'checkout-options'
        ? CHECKOUT_OPTIONS_ADD_CHECKOUT_OPTION_TAB
        : OVERVIEW_ADD_CHECKOUT_OPTION_TAB,
      active: activeTab === tabNames.addCheckoutOption,
      content: <AddCheckoutOptionTab key={tabNames.addCheckoutOption} />,
      icon: <PlusIcon />,
      disabled: true,
    },
  ];

  return (
    <Card title="Checkout Options" titleLink={CHECKOUT_OPTIONS} tabs={tabs} />
  );
};
