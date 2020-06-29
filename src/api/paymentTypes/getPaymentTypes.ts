import { API_BASE_URL } from '../index';

export const getPaymentTypes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/paymentTypes`);
    const paymentTypes = await response.json();
    return paymentTypes;
  } catch (error) {
    throw new Error(error);
  }
};
