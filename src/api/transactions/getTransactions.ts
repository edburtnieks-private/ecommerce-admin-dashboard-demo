import { API_BASE_URL } from '../index';

export const getTransactions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions?_sort=countAllTime&_order=desc&_expand=paymentTypes`);
    const transactions = await response.json();
    return transactions;
  } catch (error) {
    throw new Error(error);
  }
};
