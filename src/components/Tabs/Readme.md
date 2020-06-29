Most likely you will not need to use this component by itself.

Instead use `tabs` prop on `Card` component to setup tabs and dynamically display tab content. [See Card Component](http://localhost:6060/transactions#card-1).

```jsx
import { Tabs } from './index';
import { Action } from '../Action';
import { SortIcon } from '../Icons/Sort';
import { SettingsIcon } from '../Icons/Settings';
import { PlusIcon } from '../Icons/Plus';

<Tabs tabs={[
  {
    text: 'Transactions',
    url: '/transactions',
    active: true,
  },
  {
    text: 'Add Checkout Option',
    url: '/add-checkout-option',
    active: false,
    icon: <PlusIcon />,
  },
  {
    text: 'Disabled Tab',
    url: '/disabled-tab',
    active: false,
    disabled: true,
  },
]} />
```
