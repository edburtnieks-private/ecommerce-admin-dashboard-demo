```jsx
import { MenuButton } from './index';

const [isMenuOpen, setMenuState] = React.useState(false);

<MenuButton
  onClick={() => setMenuState(!isMenuOpen)}
  isMenuOpen={isMenuOpen}
  style={{ display: 'flex' }}
/>
```

`Style` attribute is for demonstration purpose only and `display` property is controlled by media query
