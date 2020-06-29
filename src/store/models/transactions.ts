import {
  Action,
  action,
  Thunk,
  thunk,
  ActionOn,
  actionOn,
} from 'easy-peasy';

import { StoreModel } from './index';
import { PaymentTypeModel } from './paymentTypes';

import { getTransactions } from '../../api/transactions/getTransactions';

import { getValuePercentage } from '../../utils/calculatePercentage';
import { abbreviateNumber } from '../../utils/abbreviateNumber';

export interface TransactionModel {
  id: string;
  companyName: string;
  countAllTime: number;
  countThisYear: number;
  countThisMonth: number;
  countThisWeek: number;
  countToday: number;
  count: number;
  countPercentage: number;
  abbreviatedCount: string;
  paymentTypesId: string;
  paymentTypes: PaymentTypeModel;
}

export interface TransactionsModel {
  items: TransactionModel[];
  filteredItems: TransactionModel[];
  timePeriod: string;
  sortingOrder: string;
  setItems: Action<TransactionsModel, TransactionModel[]>;
  setFilteredItems: Action<TransactionsModel, TransactionModel[]>;
  setCount: Action<TransactionsModel, { items?: string, timePeriod: string }>;
  updateCount: ActionOn<TransactionsModel>;
  setTimePeriod: Action<TransactionsModel, string>;
  setSortingOrder: Action<TransactionsModel, string>;
  fetchTransactions: Thunk<TransactionsModel>;
  filterByPaymentType: Thunk<TransactionsModel, PaymentTypeModel, any, StoreModel>;
  resetFilterPaymentType: Thunk<TransactionsModel, never, any, StoreModel>;
  filterByTimePeriod: Thunk<TransactionsModel, string>;
  sortItems: Thunk<TransactionsModel>;
}

const transactionsModel: TransactionsModel = {
  // State
  items: [],
  filteredItems: [],
  timePeriod: 'All Time',
  sortingOrder: 'Desc',

  // Actions
  setItems: action((state, transactions) => {
    state.items = transactions;
  }),

  setFilteredItems: action((state, filteredItems) => {
    state.filteredItems = filteredItems;
  }),

  setCount: action((
    state,
    {
      items = 'filteredItems',
      timePeriod,
    }: {
      items: 'items' | 'filteredItems',
      timePeriod: string,
    },
  ) => {
    state[items] = state[items].map((transaction: TransactionModel) => {
      switch (timePeriod) {
        case 'All Time':
          transaction.count = transaction.countAllTime;
          break;
        case 'This Year':
          transaction.count = transaction.countThisYear;
          break;
        case 'This Month':
          transaction.count = transaction.countThisMonth;
          break;
        case 'This Week':
          transaction.count = transaction.countThisWeek;
          break;
        case 'Today':
          transaction.count = transaction.countToday;
          break;
        default:
          transaction.count = transaction.countAllTime;
          break;
      }

      return transaction;
    });

    if (items === 'items') {
      state.filteredItems = state.items;
    }
  }),

  setTimePeriod: action((state, timePeriod) => {
    state.timePeriod = timePeriod;
  }),

  setSortingOrder: action((state, sortingOrder) => {
    state.sortingOrder = sortingOrder;
  }),

  updateCount: actionOn(
    (actions) => actions.setCount,
    (state) => {
      if (state.filteredItems.length) {
        const maxCount = state.filteredItems.reduce((a, b) => (a.count > b.count ? a : b)).count;

        state.filteredItems.forEach((transaction: TransactionModel) => {
          transaction.countPercentage = getValuePercentage(transaction.count, maxCount);
          transaction.abbreviatedCount = abbreviateNumber(transaction.count);
        });
      }
    },
  ),

  // Thunks
  fetchTransactions: thunk(async (actions, _, { getState }) => {
    const { items } = getState();

    if (!items.length) {
      try {
        const transactions = await getTransactions();
        const { timePeriod } = getState();

        actions.setItems(transactions);
        actions.setCount({ items: 'items', timePeriod });
      } catch (error) {
        throw new Error(error);
      }
    }
  }),

  filterByPaymentType: thunk((actions, paymentType, { getState, getStoreActions }) => {
    const { items, timePeriod } = getState();
    const { paymentTypes } = getStoreActions();
    const filteredItems = items.filter((
      transaction: TransactionModel,
    ) => transaction.paymentTypesId === paymentType.id);

    actions.setFilteredItems(filteredItems);
    actions.setCount({ timePeriod });
    paymentTypes.setCurrentPaymentType(paymentType.name);
  }),

  resetFilterPaymentType: thunk((actions, payload, { getState, getStoreActions }) => {
    const { items, timePeriod } = getState();
    const { paymentTypes } = getStoreActions();

    actions.setFilteredItems(items);
    actions.setCount({ timePeriod });
    paymentTypes.setCurrentPaymentType(payload);
  }),

  filterByTimePeriod: thunk((actions, timePeriod) => {
    actions.setTimePeriod(timePeriod);
    actions.setCount({ timePeriod });
  }),

  sortItems: thunk((actions, _, { getState }) => {
    const { items, filteredItems, sortingOrder } = getState();

    const newItems = items.sort((a, b) => {
      if (a.count > b.count) {
        return a.count - b.count;
      }

      return b.count - a.count;
    });

    const newFilteredItems = filteredItems.sort((a, b) => {
      if (a.count > b.count) {
        return a.count - b.count;
      }

      return b.count - a.count;
    });

    actions.setFilteredItems(newFilteredItems);
    actions.setItems(newItems);
    actions.setSortingOrder(sortingOrder === 'Desc' ? 'Asc' : 'Desc');
  }),
};

export default transactionsModel;
