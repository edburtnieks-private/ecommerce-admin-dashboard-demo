import React from 'react';
import { useParams } from 'react-router-dom';

import { DefaultLayout } from '../../layouts/Default';
import { CheckoutOptionsCard, tabNames } from './components/CheckoutOptionsCard';

export const CheckoutOptions = () => {
  const { tab } = useParams();

  return (
    <DefaultLayout>
      <CheckoutOptionsCard activeTab={tab || Object.values(tabNames)[0]} data-testid="checkoutOptionsCard" />
    </DefaultLayout>
  );
};
