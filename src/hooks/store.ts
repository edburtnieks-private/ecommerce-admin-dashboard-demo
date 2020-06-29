import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from '../store/models';

const {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore,
} = createTypedHooks<StoreModel>();

export {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore,
};
