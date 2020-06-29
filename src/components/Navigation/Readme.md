```jsx
import { Navigation } from './index';
import { CreditCardIcon } from '../Icons/CreditCard';

<Navigation links={[
  {
    text: 'Link 1',
    url: '/link-1',
    icon: () => <CreditCardIcon />,
  },
  {
    text: 'Link 2',
    url: '/link-2',
    icon: () => <CreditCardIcon />,
  },
]} />
```
