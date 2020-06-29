import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import '@formatjs/intl-numberformat/polyfill';

import { App } from './components/App';
import store from './store';

import './assets/scss/index.scss';

// Intl.NumberFormat polyfill for Firefox

// @ts-ignore
if (typeof Intl.NumberFormat.__addLocaleData === 'function') {
  // @ts-ignore
  Intl.NumberFormat.__addLocaleData(
    require('@formatjs/intl-numberformat/dist/locale-data/en.json'),
  );
}

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
