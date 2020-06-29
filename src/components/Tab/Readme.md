Most likely you will not need to use this component by itself.

Instead use `tabs` prop on `Card` component to setup tab component. [See Card Component](http://localhost:6060/transactions#card-1).

### Active

```jsx
import { Tab } from './index';

<Tab tab={
  {
    text: 'Transactions',
    url: '/transactions',
    active: true,
  }
} />
```

### Not Active

```jsx
import { Tab } from './index';

<Tab tab={
  {
    text: 'Transactions',
    url: '/transactions',
    active: false,
  }
} />
```

### With Icon

```jsx
import { Tab } from './index';
import { CreditCardIcon } from '../Icons/CreditCard';

<Tab tab={
  {
    text: 'Transactions',
    url: '/transactions',
    active: true,
    icon: <CreditCardIcon />,
  }
} />
```

### Disabled

```jsx
import { Tab } from './index';

<Tab tab={
  {
    text: 'Transactions',
    url: '/transactions',
    active: false,
    disabled: true,
  }
} />
```
