import React from 'react';
import { useParams } from 'react-router-dom';

import { DefaultLayout } from '../../layouts/Default';
import { CheckoutOptionsCard, tabNames } from '../CheckoutOptions/components/CheckoutOptionsCard';

export const Overview = () => {
  const { tab } = useParams();

  return (
    <DefaultLayout title="Overview">
      <CheckoutOptionsCard
        activeTab={tab || Object.values(tabNames)[0]}
        location="overview"
      />
    </DefaultLayout>
  );
};
