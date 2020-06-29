### Only Text

```jsx
import { Action } from './index';

<Action text="Sort" />
```

### With Icon

```jsx
import { Action } from './index';
import { SortIcon } from '../Icons/Sort';

<Action
  text="Sort"
  icon={<SortIcon />}
/>
```

### As Dropdown

```jsx
import { Action } from './index';
import { SettingsIcon } from '../Icons/Settings';

const [isDropdownOpen, setDropdownState] = React.useState(false);

<Action
  text="Settings"
  icon={<SettingsIcon />}
  dropdown
  isDropdownOpen={isDropdownOpen}
  onClick={() => setDropdownState(!isDropdownOpen)}
>
  <Action text="Theme" onClick={() => setDropdownState(false)} />
  <Action text="Profile" onClick={() => setDropdownState(false)} />
  <Action text="Layout" onClick={() => setDropdownState(false)} />
</Action>
```

### As Dropdown With Dynamic Text

```jsx
import { Action } from './index';
import { SettingsIcon } from '../Icons/Settings';

const [isDropdownOpen, setDropdownState] = React.useState(false);
const [settingsText, setSettingsText] = React.useState('Settings');

const onClick = (event) => {
  setSettingsText(event.target.textContent);
  setDropdownState(false);
};

<Action
  text={settingsText}
  icon={<SettingsIcon />}
  dropdown
  isDropdownOpen={isDropdownOpen}
  onClick={() => setDropdownState(!isDropdownOpen)}
>
  <Action text="Settings" onClick={onClick} />
  <Action text="Theme" onClick={onClick} />
  <Action text="Profile" onClick={onClick} />
  <Action text="Layout" onClick={onClick} />
</Action>
```
