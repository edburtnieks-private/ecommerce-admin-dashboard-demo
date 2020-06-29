import transactionsModel, { TransactionsModel } from './transactions';
import paymentTypesModel, { PaymentTypesModel } from './paymentTypes';

export interface StoreModel {
  transactions: TransactionsModel;
  paymentTypes: PaymentTypesModel;
}

const storeModel: StoreModel = {
  transactions: transactionsModel,
  paymentTypes: paymentTypesModel,
};

export default storeModel;
