```jsx
import { TransactionFilters } from './index';
import { TransactionFilter } from '../TransactionFilter';
import { ClockIcon } from '../Icons/Clock';

<TransactionFilters filters={[
  <TransactionFilter text="All Transactions" />,
  <TransactionFilter text="This Week" icon={<ClockIcon />} />,
]} />
```
