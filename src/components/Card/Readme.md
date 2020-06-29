### With Content

```jsx
import { Card } from './index';

<Card title="Checkout Options">
  Content
</Card>
```

### With Content and Actions

```jsx
import { Card } from './index';
import { Action } from '../Action';
import { SortIcon } from '../Icons/Sort';
import { SettingsIcon } from '../Icons/Settings';
import { PlusIcon } from '../Icons/Plus';

<Card
  title="Checkout Options"
  actions={[
    {
      text: 'Sort',
      icon: <SortIcon />,
    },
    {
      text: 'Settings',
      icon: <SettingsIcon />,
    },
    {
      text: 'Add',
      icon: <PlusIcon />,
    },
  ]}
>
  Content
</Card>
```

### With Tabs

```jsx
import { Card } from './index';
import { Action } from '../Action';
import { SortIcon } from '../Icons/Sort';
import { SettingsIcon } from '../Icons/Settings';
import { PlusIcon } from '../Icons/Plus';

<Card
  title="Checkout Options"
  tabs={[
    {
      text: 'Transactions',
      url: '/transactions',
      active: true,
      content: 'Transaction Tab Content',
      actions: [
        {
          text: 'Sort',
          icon: <SortIcon />,
        },
        {
          text: 'Settings',
          icon: <SettingsIcon />,
        },
      ],
    },
    {
      text: 'Add Checkout Option',
      url: '/add-checkout-option',
      active: false,
      content: 'Add Checkout Option Tab Content',
      icon: <PlusIcon />,
    },
    {
      text: 'Disabled Tab',
      url: '/disabled-tab',
      active: false,
      content: 'Disabled Tab Content',
      disabled: true,
    },
  ]}
/>
```
