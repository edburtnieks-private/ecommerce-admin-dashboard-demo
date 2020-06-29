import {
  Action,
  action,
  Thunk,
  thunk,
} from 'easy-peasy';

import { getPaymentTypes } from '../../api/paymentTypes/getPaymentTypes';

export interface PaymentTypeModel {
  id: string;
  name: string;
}

export interface PaymentTypesModel {
  items: PaymentTypeModel[];
  current: string;
  setPaymentTypes: Action<PaymentTypesModel, PaymentTypeModel[]>;
  fetchPaymentTypes: Thunk<PaymentTypesModel>;
  setCurrentPaymentType: Action<PaymentTypesModel, string>
}

const paymentTypesModel: PaymentTypesModel = {
  // State
  items: [],
  current: 'All Payment Types',

  // Actions
  setPaymentTypes: action((state, paymentTypes) => {
    state.items = paymentTypes;
  }),
  setCurrentPaymentType: action((state, paymentType = 'All Payment Types') => {
    state.current = paymentType;
  }),

  // Thunks
  fetchPaymentTypes: thunk(async (actions, _, { getState }) => {
    const { items } = getState();

    if (!items.length) {
      try {
        const paymentTypes = await getPaymentTypes();
        actions.setPaymentTypes(paymentTypes);
      } catch (error) {
        throw new Error(error);
      }
    }
  }),
};

export default paymentTypesModel;
