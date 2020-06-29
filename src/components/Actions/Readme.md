```jsx
import { Actions } from './index';
import { Action } from '../Action';
import { SortIcon } from '../Icons/Sort';
import { SettingsIcon } from '../Icons/Settings';
import { PlusIcon } from '../Icons/Plus';

<Actions actions={[
  {
    text: 'Sort',
  },
  {
    text: 'Settings',
    icon: <SettingsIcon />,
  },
  {
    text: 'Add',
    icon: <PlusIcon />,
  },
]} />
```
