import { Overview } from './pages/Overview';
import { CheckoutOptions } from './pages/CheckoutOptions';

import { tabNames } from './pages/CheckoutOptions/components/CheckoutOptionsCard';

import { CreditCardIcon } from './components/Icons/CreditCard';
import { NavigationLink } from './components/Navigation';

export const OVERVIEW = '/';
export const OVERVIEW_TAB = '/tab/:tab';
export const OVERVIEW_TRANSACTIONS_TAB = `/tab/${tabNames.transactions}`;
export const OVERVIEW_MANAGE_CHECKOUT_OPTIONS_TAB = `/tab/${tabNames.manageCheckoutOptions}`;
export const OVERVIEW_ADD_CHECKOUT_OPTION_TAB = `/tab/${tabNames.addCheckoutOption}`;
export const CHECKOUT_OPTIONS = '/checkout-options';
export const CHECKOUT_OPTIONS_TAB = '/checkout-options/tab/:tab';
export const CHECKOUT_OPTIONS_TRANSACTIONS_TAB = `/checkout-options/tab/${tabNames.transactions}`;
export const CHECKOUT_OPTIONS_MANAGE_CHECKOUT_OPTIONS_TAB = `/checkout-options/tab/${tabNames.manageCheckoutOptions}`;
export const CHECKOUT_OPTIONS_ADD_CHECKOUT_OPTION_TAB = `/checkout-options/tab/${tabNames.addCheckoutOption}`;

export const navigationLinks: NavigationLink[] = [
  {
    text: 'Checkout Options',
    url: CHECKOUT_OPTIONS,
    icon: CreditCardIcon,
  },
];

export const routes = [
  {
    path: CHECKOUT_OPTIONS,
    component: CheckoutOptions,
    exact: true,
  },
  {
    path: CHECKOUT_OPTIONS_TAB,
    component: CheckoutOptions,
    exact: true,
  },
  {
    path: OVERVIEW,
    component: Overview,
    exact: true,
  },
  {
    path: OVERVIEW_TAB,
    component: Overview,
    exact: true,
  },
];
